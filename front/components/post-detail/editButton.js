import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../styled/uiComponent';
import { DELETE_POST_REQUEST } from '../../reducers/drawing';

const EditButton = ({onEditingState}) => {
  const dispatch = useDispatch();

  const { nowShowingPost } = useSelector((state) => state.drawing);

  const handleDeletePost = () => {
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

  return (
    <div>
      <Button
        type="button"
        style={{ width: '80px', margin: '2.5px' }}
        onClick={onEditingState}
      >
        수정
      </Button>
      <Button
        type="button"
        style={{ width: '80px', margin: '2.5px' }}
        onClick={handleDeletePost}
      >
        삭제
      </Button>
    </div>
  );
};

export default EditButton;
