import Link from 'next/link';
import React from 'react';
import Container from '../components/container';
import Text from '../components/text';

const dummyPhoto = [
  {
    creater: 'suna',
    Img:
      'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
  },
  {
    creater: 'ffff',
    Img:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg',
  },
  {
    creater: 'ffff',
    Img:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg',
  },
  {
    creater: 'ffff',
    Img:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg',
  },
  {
    creater: 'ffff',
    Img:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg',
  },
];

const Gallery = () => {
  return (
    <Container flex_direction="column">
      <Text>오늘의 그림들</Text>
      <Container
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, 230px)',
          gridTemplateColumns: 'repeat(2, 300px)',
        }}
      >
        {dummyPhoto.map((item) => (
          <Link href="/imgDetail">
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
