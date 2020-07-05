import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Textarea, Button, Form } from '../styled/uiComponent';
import Text from '../styled/text';
import Container from '../styled/container';
import { EDIT_POST_DETAIL_REQUEST } from '../../reducers/drawing';
import EditButton from './editButton';
import Like from './like';

const PostDetail = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const { nowShowingPost } = useSelector((state) => state.drawing);
  const { me, isLoggedIn } = useSelector((state) => state.user);
  const postTitle = useRef();
  const postInfomation = useRef();

  const handleEditingState = () => {
    setEditing((prev) => !prev);
  };

  const handleChangeData = () => {
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
    } else {
      setEditing(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        margin: '10px 0 ',
        width: '90%',
        maxWidth: '350px',
      }}
    >
      {editing ? (
        <>
          <Form onSubmit={handleChangeData} none>
            <Container
              flexDirection="column"
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Container justifyContent="space-between">
                <Text bold fontSize="big" style={{ padding: '15px 0' }}>
                  {`${
                    nowShowingPost.post.creator
                      ? nowShowingPost.post.creator.writer
                      : '탈퇴한 회원입니다.'
                  }`}
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
              {`${
                nowShowingPost.post.creator
                  ? nowShowingPost.post.creator.writer
                  : '탈퇴한 회원입니다.'
              }`}
            </Text>
            {nowShowingPost.post.creator !== null && nowShowingPost.post.creator._id === nowShowingPost.user._id &&
            isLoggedIn ? (
              <EditButton onEditingState={handleEditingState} />
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
  );
};

export default PostDetail;
