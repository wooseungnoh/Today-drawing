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
import Text from '../components/styled/text';

const Gallery = () => {
  const dispatch = useDispatch();
  const { postList, popSubjectMenu, selectedWord } = useSelector(
    (state) => state.drawing,
  );
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

  const handleContainerClick = () => {
    if (popSubjectMenu) {
      dispatch({
        type: CLOSE_SUBJECT_MENU,
      });
    }
  };

  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <GalleryHeader />
      <Container
        onClick={handleContainerClick}
        flexDirection="column"
        wsize="70%"
        justifyContent="center"
        style={{
          overflowX: 'hidden',
        }}
      >
        <GalleryContainer postLength={postList ? postList.length : 0}>
          {postList && postList.length > 0 ? (
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
            <>
              <Text>{`선택된 주제 - ${selectedWord}`}</Text>
              <Text>작성된 포스트가 없습니다</Text>
            </>
          )}
        </GalleryContainer>
      </Container>
    </Container>
  );
};

export default Gallery;
