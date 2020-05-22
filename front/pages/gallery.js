import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, { GalleryContainer } from '../components/container';
import Text from '../components/text';
import PhotoView from '../components/photoView';
import { LOAD_GALLERY_REQUEST } from '../reducers/drawing';

const Gallery = () => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.drawing);

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
  }, []);

  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <Text style={{margin:'15px 0'}}>오늘의 그림들</Text>
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
