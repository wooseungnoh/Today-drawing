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
      //지금 디테일 화면의 주소값
      const nowUrl = document.location.href;

      //지금 주소에서 post ID 만 추출
      const slice = nowUrl.split('p/');
      
      // editingSuccess 이 ture 가 되었다(수정이 완료되었다면)면,
      // 추출된 ID 를 가지고 변경된 해당사항을 다시 불러옴
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
