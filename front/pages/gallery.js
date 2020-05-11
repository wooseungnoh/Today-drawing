import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/container';
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
    <Container
      flexDirection="column"
      style={{
        minHeight: '700px',
        justifyContent: 'flex-start',
        marginTop: '100px',
      }}
    >
      <Text>오늘의 그림들</Text>
      <Container
        style={{
          marginTop: '30px',
          display: 'grid',
          gridTemplateRows: 'repeat(3, 200px)',
          gridTemplateColumns: 'repeat(2, 300px)',
          gridGap: '10px',
          marginBottom: '30px',
        }}
      >
        {postList ? (
          postList.map((item, id) => (
            <Link key={id} href="/p/[imgDetail]" as={`/p/${item._id}`}>
              <a>
                <PhotoView
                  creater={item.title}
                  url={`http://localhost:5000/${item.fileUrl}`}
                />
              </a>
            </Link>
          ))
        ) : (
          <></>
        )}
      </Container>
    </Container>
  );
};

export default Gallery;
