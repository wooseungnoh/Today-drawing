import React, { useEffect } from 'react';
import Router from 'next/router';
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
      });
    }
  }, [deletePostSuccess]);

  return (
    <>
      {nowShowingPost ? (
        <Container flexDirection="column">
          <Container style={{ maxHeight: '285px' }}>
            <Img background={nowShowingPost.post.fileUrl} />
          </Container>
          <PostDetail />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default imgDetail;
