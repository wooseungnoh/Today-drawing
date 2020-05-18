import React, { useEffect, useState } from 'react';
import Router from 'next/Router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Img, Input, Textarea, Button } from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  LOAD_POST_DETAIL_REQUEST,
  EDIT_POST_DETAIL_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_STATE_OFF,
  LIKE_REQUEST,
  UNLIKE_REQUEST,
  LIKE_ON,
} from '../../reducers/drawing';

const imgDetail = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const { me, isLoggedIn } = useSelector((state) => state.user);
  const {
    nowShowingPost,
    editingSuccess,
    deletePostSuccess,
    like,
  } = useSelector((state) => state.drawing);

  useEffect(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { postId: slice[1] },
    });
  }, []);
  

  const handleEditingState = () => {
    setEditing((prev) => !prev);
  };

  const onChangeData = (e) => {
    e.preventDefault();
    if (me === null) {
      alert('권한이 없습니다.');
      location.href = `${document.location.href}`;
    } else if (me._id === nowShowingPost.post.creator._id) {
      dispatch({
        type: EDIT_POST_DETAIL_REQUEST,
        data: {
          id: nowShowingPost.post._id,
          title: e.target.childNodes[2].value,
          description: e.target.childNodes[4].value,
        },
      });
    } else {
      alert('권한이 없습니다.');
      location.href = `${document.location.href}`;
    }
    setEditing(false);
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

  const likeRequest = () => {
    dispatch({
      type: LIKE_REQUEST,
      data: {
        id: nowShowingPost.post._id,
      },
    });
    dispatch({
      type: LIKE_ON,
    });
  };

  const unlikeRequest = () => {
    dispatch({
      type: UNLIKE_REQUEST,
      data: {
        id: nowShowingPost.post._id,
      },
    });
  };
  const printLike = () => {
    if (nowShowingPost && me) {
      return String(nowShowingPost.post.liker.indexOf(me._id)) === '-1' ? (
        <FontAwesomeIcon icon={faHeart} onClick={likeRequest} />
      ) : (
        <FontAwesomeIcon icon={fullHeart} onClick={unlikeRequest} />
      );
    }
  };

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
                <form
                  onSubmit={onChangeData}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: '65px',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text bold fontSize="big" style={{ padding: '15px 0' }}>
                        {`${nowShowingPost.post.creator.writer}`}
                      </Text>
                      <Text fontSize="medium" style={{ paddingBottom: '30px' }}>
                        {`${nowShowingPost.post.createAt.split('T')[0]}`}
                      </Text>
                    </div>
                    <Button style={{ width: '80px' }}>작성완료</Button>
                  </div>
                  <label>제목</label>
                  <Input
                    type="text"
                    style={{ width: '100%' }}
                    defaultValue={nowShowingPost.post.title}
                  />
                  <label>내용</label>
                  <Textarea
                    edit
                    style={{ width: '100%', resize: 'none' }}
                    defaultValue={nowShowingPost.post.description}
                  />
                </form>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
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
                    printLike()
                  )}
                </div>
                <Text fontSize="medium" style={{ paddingBottom: '30px' }}>
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
