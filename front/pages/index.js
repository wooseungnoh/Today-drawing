import React from 'react';
import Link from 'next/link';
import Container from '../components/container';
import Text from '../components/text';

const dummyPhoto = [
  {
    creater: 'wooseung',
    Img:
      'https://lh3.googleusercontent.com/proxy/3xD_WNEL6XNE0KqDncEN1Brdul2GsqcOt2ryNcVFP4_FB77PpMMTD0To-hUyHXhPxYEQxAE3yxRVhfRGBp9UruLLw1l7JDoJVMlw5bT1UxlK9wga3bgg8MCTjCEDfcdEMwDGOD3Y-RNINCHRgiRHLf4yIM040YEx6nSQGJC9QHSE4YQInXSevJwTsO3lai4rmvIWWPAAf45oobE-3DwyA4ZGAzOHYvJd7z66oiEMVU-SdpRpV0AeoakLnO_tLwe2Rh-xKORra3jjUNH8nA9rtQd1f-iNsC2sstbbY0SWS1Rv2MKDmqcYKuYiZ0bAz-fZi1hGfKfYPiFJpMpbZA9AgpdR9jgLQfw8',
  },
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

const Home = () => {
  return (
    <Container flex_direction="column">
      <Text fontSize="mainTitle">하루그림</Text>
      <Text>당신의 그림습관</Text>
      <Link href="/upload">
        <a>
          <Container flex_direction="column">
            <Text style={{ marginTop: '100px' }} fontSize="massive">
              " 스케치북 "
            </Text>
            <Text style={{ marginBottom: '100px' }} bold fontSize="big">
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
          <div>
            <div
              style={{
                margin: '10px',
                width: '400px',
                height: '250px',
                background: `url("${item.Img}") no-repeat`,
                backgroundSize: 'cover',
                borderRadius: '10px',
                boxShadow: '5px 5px 15px #999',
              }}
            />
            <Text bold>{item.creater}</Text>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
