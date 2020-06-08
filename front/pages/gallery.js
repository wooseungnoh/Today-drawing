import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, { GalleryContainer } from '../components/container';
import Text from '../components/text';
import PhotoView from '../components/photoView';
import {
  LOAD_GALLERY_REQUEST,
  WORD_UPDATE_REQUEST,
  LOAD_ALLGALLERY_REQUEST,
} from '../reducers/drawing';

const Gallery = () => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.drawing);
  const { word } = useSelector((state) => state.drawing);

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
    dispatch({
      type: WORD_UPDATE_REQUEST,
    });
  }, []);

  const loadTodayPost = () => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
  };

  const loadAllPost = () => {
    dispatch({
      type: LOAD_ALLGALLERY_REQUEST,
    });
  };

  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <div>
        <Text style={{ margin: '15px 0' }}>오늘의 주제 - </Text>
        <button onClick={loadTodayPost}>{`${word}`}</button>
        <button style={{ marginLeft: '35px' }} onClick={loadAllPost}>
          전체보기
        </button>
      </div>
      <Container
        flexDirection="column"
        hsize="85%"
        wsize="70%"
        style={{
          justifyContent: 'flex-start',
          overflowY: 'scroll',
        }}
      >
        <GalleryContainer>
          {postList ? (
            postList.map((item) => {
              const { id } = item;
              return (
                <Link key={id} href="/p/[imgDetail]" as={`/p/${item._id}`}>
                  <a>
                    <PhotoView
                      creater={item.title}
                      url={`http://localhost:5000/${item.fileUrl}`}
                    />
                  </a>
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </GalleryContainer>
      </Container>
    </Container>
  );
};

export default Gallery;
