import React, { useEffect } from 'react';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import { Img } from '../../components/styled/uiComponent';
import Container from '../../components/styled/container';
import {
  LOAD_POST_DETAIL_REQUEST,
  DELETE_STATE_OFF,
} from '../../reducers/drawing';
import PostDetail from '../../components/post-detail/postDetail';

const imgDetail = () => {
  const dispatch = useDispatch();
  const { nowShowingPost, editingSuccess, deletePostSuccess } = useSelector(
    (state) => state.drawing,
  );

  useEffect(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { postId: slice[1] },
    });
  }, []);

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
            src={nowShowingPost.post.fileUrl}
            width="30%"
            style={{ minWidth: '350px' }}
          />
          <PostDetail/>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default imgDetail;
