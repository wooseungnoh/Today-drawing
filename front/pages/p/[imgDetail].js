import React, { useEffect, useState, useRef } from 'react';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import {
  Img,
  Input,
  Textarea,
  Button,
  Form,
} from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';
import {
  LOAD_POST_DETAIL_REQUEST,
  EDIT_POST_DETAIL_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_STATE_OFF,
} from '../../reducers/drawing';
import Like from '../../components/like';

const imgDetail = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const { me, isLoggedIn } = useSelector((state) => state.user);
  const { nowShowingPost, editingSuccess, deletePostSuccess } = useSelector(
    (state) => state.drawing,
  );
  const postTitle = useRef();
  const postInfomation = useRef();

  useEffect(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { postId: slice[1] },
    });
  }, []);

  const handleEditingState = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const onChangeData = (e) => {
    e.preventDefault();
    const result = confirm('게시물을 수정하시겠습니까?');
    if (result) {
      if (me === null) {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      } else if (me._id === nowShowingPost.post.creator._id) {
        if (
          postTitle.current.value !== '' &&
          postInfomation.current.value !== ''
        ) {
          dispatch({
            type: EDIT_POST_DETAIL_REQUEST,
            data: {
              id: nowShowingPost.post._id,
              title: postTitle.current.value,
              description: postInfomation.current.value,
            },
          });
        } else {
          alert('양식을 작성하여야 합니다.');
        }
      } else {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      }
      setEditing(false);
    }
  };

  useEffect(() => {
    if (editingSuccess) {
      const nowUrl = document.location.href;
      const slice = nowUrl.split('p/');
      dispatch({
        type: LOAD_POST_DETAIL_REQUEST,
        data: { postId: slice[1] },
      });
    }
  }, [editingSuccess]);

  const onDeletePost = () => {
    if (confirm('정말 게시물을 삭제하시겠습니까?') === true) {
      if (me === null) {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      } else if (me._id === nowShowingPost.post.creator._id) {
        dispatch({
          type: DELETE_POST_REQUEST,
          data: {
            id: nowShowingPost.post._id,
          },
        });
      } else {
        alert('권한이 없습니다.');
        location.href = `${document.location.href}`;
      }
    }
  };

  useEffect(() => {
    if (deletePostSuccess) {
      Router.push('/gallery');
      dispatch({
        type: DELETE_STATE_OFF,
        data: {
          id: nowShowingPost.post._id,
        },
      });
    }
  }, [deletePostSuccess]);

  return (
    <Container flexDirection="column">
      {nowShowingPost ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Img
            src={`http://localhost:5000/${nowShowingPost.post.fileUrl}`}
            width="30%"
            style={{ minWidth: '350px' }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              margin: '10px 0 ',
              width: '30%',
              minWidth: '350px',
            }}
          >
            {editing ? (
              <>
                <Form onSubmit={onChangeData} none>
                  <Container
                    flexDirection="column"
                    alignItems="baseline"
                    justifyContent="space-between"
                  >
                    <Container justifyContent="space-between">
                      <Text bold fontSize="big" style={{ padding: '15px 0' }}>
                        {`${nowShowingPost.post.creator.writer}`}
                      </Text>
                      <Button style={{ width: '80px' }}>작성완료</Button>
                    </Container>
                    <Text fontSize="medium" style={{ paddingBottom: '25px' }}>
                      {`${nowShowingPost.post.createAt.split('T')[0]}`}
                    </Text>
                  </Container>

                  <label>제목</label>
                  <Input
                    type="text"
                    ref={postTitle}
                    style={{ width: '100%' }}
                    defaultValue={nowShowingPost.post.title}
                  />
                  <label>내용</label>
                  <Textarea
                    edit
                    ref={postInfomation}
                    style={{ width: '100%', resize: 'none' }}
                    defaultValue={nowShowingPost.post.description}
                  />
                </Form>
              </>
            ) : (
              <>
                <Container justifyContent="space-between" hsize="40px">
                  <Text bold fontSize="big" style={{ padding: '15px 0' }}>
                    {`${nowShowingPost.post.creator.writer}`}
                  </Text>
                  {nowShowingPost.post.creator._id ===
                    nowShowingPost.user._id && isLoggedIn ? (
                    <div>
                      <Button
                        style={{ width: '80px', margin: '2.5px' }}
                        onClick={handleEditingState}
                      >
                        수정
                      </Button>
                      <Button
                        style={{ width: '80px', margin: '2.5px' }}
                        onClick={onDeletePost}
                      >
                        삭제
                      </Button>
                    </div>
                  ) : (
                    <Like />
                  )}
                </Container>
                <Text fontSize="medium" style={{ paddingBottom: '25px' }}>
                  {`${nowShowingPost.post.createAt.split('T')[0]}`}
                </Text>
                <Text bold fontSize="huge" style={{ paddingBottom: '15px' }}>
                  {nowShowingPost.post.title}
                </Text>
                <div style={{ width: '100%' }}>
                  <Text>{nowShowingPost.post.description}</Text>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default imgDetail;
