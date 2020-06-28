import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, { GalleryContainer } from '../components/styled/container';
import PhotoView from '../components/photoView';
import {
  LOAD_GALLERY_REQUEST,
  DONOT_DUPLICATION_OFF,
  CLOSE_SUBJECT_MENU,
} from '../reducers/drawing';
import GalleryHeader from '../components/galleryHeader';

const Gallery = () => {
  const dispatch = useDispatch();
  const { postList, popSubjectMenu } = useSelector((state) => state.drawing);
  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
    dispatch({
      type: DONOT_DUPLICATION_OFF,
    });
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: CLOSE_SUBJECT_MENU,
      });
    };
  }, []);

  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <GalleryHeader />
      <Container
        flexDirection="column"
        hsize="85%"
        wsize="70%"
        justifyContent="flex-start"
        style={{
          overflowX: 'hidden',
        }}
      >
        <GalleryContainer postLength={postList ? postList.length : 0}>
          {postList ? (
            postList.map((item) => {
              const { id } = item;
              return (
                <Link key={id} href="/p/[imgDetail]" as={`/p/${item._id}`}>
                  <a>
                    <PhotoView creater={item.title} url={item.fileUrl} />
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
