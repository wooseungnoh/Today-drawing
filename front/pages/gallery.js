import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/container';
import Text from '../components/text';

const Gallery = () => {
  const { photo } = useSelector((state) => state.drawing);

  return (
    <Container flexDirection="column">
      <Text>오늘의 그림들</Text>
      <Container
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, 230px)',
          gridTemplateColumns: 'repeat(2, 300px)',
        }}
      >
        {photo.map((item) => (
          <Link href="/p/[imgDetail]" as={`/p/${item.id}`}>
            <a>
              <div
                style={{
                  margin: '10px',
                  width: '250px',
                  height: '150px',
                  background: `url("${item.Img}") no-repeat`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  boxShadow: '5px 5px 15px #999',
                }}
              />
              <Text bold>{item.creater}</Text>
            </a>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default Gallery;
