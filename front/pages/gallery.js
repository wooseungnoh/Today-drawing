import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, { GalleryContainer } from '../components/container';
import Text from '../components/text';
import PhotoView from '../components/photoView';
import { LOAD_GALLERY_REQUEST, WORD_UPDATE_REQUEST } from '../reducers/drawing';

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
  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <div>
      <Text style={{margin:'15px 0'}}>{`오늘의 주제 - ${word}`}</Text>
      <Text style={{marginLeft:'35px'}}>전체보기</Text>
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
