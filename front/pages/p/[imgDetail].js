import Router from 'next/Router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Img, Input, Textarea, Button } from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';
import {
  LOAD_PHOTO_DETAIL_REQUEST,
  EDIT_PHOTO_DETAIL_REQUEST,
} from '../../reducers/drawing';

const imgDetail = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const { nowShowingPost, editingSuccess } = useSelector(
    (state) => state.drawing,
  );

  useEffect(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: LOAD_PHOTO_DETAIL_REQUEST,
      data: { postId: slice[1] },
    });
  }, []);

  const handleEditingState = () => {
    setEditing((prev) => !prev);
  };

  const onChangeData = (e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_PHOTO_DETAIL_REQUEST,
      data: {
        id: nowShowingPost.post._id,
        title: e.target.childNodes[2].value,
        description: e.target.childNodes[4].value,
      },
    });
    setEditing(false);
  };

  useEffect(() => {
    if (editingSuccess) {
      const nowUrl = document.location.href;
      const slice = nowUrl.split('p/');
      dispatch({
        type: LOAD_PHOTO_DETAIL_REQUEST,
        data: { postId: slice[1] },
      });
    }
  }, [editingSuccess]);

  return (
    <Container flexDirection="column">
      {nowShowingPost ? (
        <div>
          <Img
            src={`http://localhost:5000/${nowShowingPost.post.fileUrl}`}
            width="500px"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              margin: '10px 0 ',
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
                    }}
                  >
                    <Text
                      bold
                      fontSize="big"
                      style={{ padding: '15px 0' }}
                    >{`${nowShowingPost.post.creator.writer}`}</Text>
                    <Text
                      fontSize="medium"
                      style={{ paddingBottom: '30px' }}
                    >{`${nowShowingPost.post.createAt.split('T')[0]}`}</Text>
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
                    style={{ width: '100%' }}
                    defaultValue={nowShowingPost.post.description}
                  ></Textarea>
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
                  <Text
                    bold
                    fontSize="big"
                    style={{ padding: '15px 0' }}
                  >{`${nowShowingPost.post.creator.writer}`}</Text>
                  {nowShowingPost.post.creator._id ===
                  nowShowingPost.user._id ? (
                    <div>
                      <Button
                        style={{ width: '80px', margin:"2.5px" }}
                        onClick={handleEditingState}
                      >
                        수정
                      </Button>
                      <Button
                        style={{ width: '80px', margin:"2.5px" }}
                        onClick={handleEditingState}
                      >
                        삭제
                      </Button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <Text fontSize="medium" style={{ paddingBottom: '30px' }}>{`${
                  nowShowingPost.post.createAt.split('T')[0]
                }`}</Text>
                <Text bold fontSize="huge" style={{ paddingBottom: '15px' }}>
                  {nowShowingPost.post.title}
                </Text>
                <div style={{ width: '500px' }}>
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
