import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Img } from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';
import { LOAD_PHOTO_DETAIL_REQUEST } from '../../reducers/drawing';

const imgDetail = () => {
  const dispatch = useDispatch();
  const { nowShowingPost } = useSelector((state) => state.drawing);

  useEffect(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: LOAD_PHOTO_DETAIL_REQUEST,
      data: { postId: slice[1] },
    });
  }, []);
  return (
    <Container flexDirection="column">
      {nowShowingPost ? (
        <div>
          <Img
            src={`http://localhost:5000/${nowShowingPost.fileUrl}`}
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
            <Text
              bold
              fontSize="big"
              style={{ padding: '15px 0' }}
            >{`${nowShowingPost.creator.writer}`}</Text>
            <Text fontSize="medium" style={{ paddingBottom: '30px' }}>{`${
              nowShowingPost.createAt.split('T')[0]
            }`}</Text>
            <Text
              bold
              fontSize="huge"
              style={{ paddingBottom: '15px' }}
            >{`${nowShowingPost.title}`}</Text>
            <div style={{ width: '500px' }}>
              <Text>{nowShowingPost.description}</Text>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default imgDetail;
