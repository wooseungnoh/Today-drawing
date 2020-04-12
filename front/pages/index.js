import React from 'react';
import Link from 'next/link';
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
];

const Home = () => (
  <Container flex_direction="column">
    <Text fontSize="mainTitle" style={{ marginTop: '30px' }}>
      하루 그림
    </Text>
    <Text style={{ marginBottom: '80px' }}>당신의 그림습관</Text>
    <Link href="/upload" style={{ dispaly: 'inline-block' }}>
      <a>
        <Container flex_direction="column">
          <Text fontSize="massive">" 스케치북 "</Text>
          <Text style={{ marginBottom: '80px' }} bold fontSize="big">
            내 그림 올리기
          </Text>
        </Container>
      </a>
    </Link>

    <Text style={{ margin: '30px' }} bold>
      오늘의 그림들
    </Text>
    <Container>
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

export default Home;
