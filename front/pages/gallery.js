import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/container';
import Text from '../components/text';
import PhotoView from '../components/photoView';

const Gallery = () => {
  const { photo } = useSelector((state) => state.drawing);

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
        {photo.map((item) => (
          <Link href="/p/[imgDetail]" as={`/p/${item.id}`}>
            <a>
              <PhotoView creater={item.creater} url={item.Img} />
            </a>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default Gallery;
