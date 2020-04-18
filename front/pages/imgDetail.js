import React from 'react';
import { Img } from '../components/input';
import Text from '../components/text';
import Container from '../components/container';

const imgDetail = () => {
  return (
    <Container flex_direction="column">
      <Img
        src={'https://www.codingfactory.net/wp-content/uploads/abc.jpg'}
        width="500px"
      />
      <Text>작품 제목 : 꽃</Text>
      <Text>어디엔가 피어있는 꽃을 그려보았습니다.</Text>
    </Container>
  );
};

export default imgDetail;
