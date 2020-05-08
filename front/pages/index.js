import React from 'react';
import Link from 'next/link';
import Container from '../components/container';
import Text from '../components/text';

const Home = () => (
  <Container flexDirection="column">
    <Text fontSize="mainTitle">하루 그림</Text>
    <Text style={{ marginBottom: '80px' }}>당신의 그림습관</Text>
    <Link href="/upload">
      <a>
        <Container flexDirection="column">
          <Text fontSize="massive">" 스케치북 "</Text>
          <Text style={{ marginBottom: '80px' }} bold fontSize="big">
            업로드
          </Text>
        </Container>
      </a>
    </Link>
    <Link href="/gallery">
      <a>
        <Text style={{ margin: '30px' }} bold fontSize="huge">
          오늘의 그림들
        </Text>
      </a>
    </Link>
  </Container>
);

export default Home;
