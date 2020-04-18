import React from 'react';
import { useSelector } from 'react-redux';
import { Img } from '../components/input';
import Text from '../components/text';
import Container from '../components/container';

const imgDetail = () => {
  const { photo } = useSelector((state) => state.drawing);

  return (
    <Container flex_direction="column">
      <Img src={photo[0].Img} width="500px" />
      <Text>작품 제목 : {photo[0].title}</Text>
      <Text>{photo[0].description}</Text>
    </Container>
  );
};

export default imgDetail;
