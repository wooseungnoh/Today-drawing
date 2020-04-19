import React from 'react';
import { useSelector } from 'react-redux';
import { Img } from '../components/uiComponent';
import Text from '../components/text';
import Container from '../components/container';

const imgDetail = () => {
  const { photo } = useSelector((state) => state.drawing);

  return (
    <Container flexDirection="column">
      <Img src={photo[0].Img} width="500px" />
      <Text>{`작품 제목 : ${photo[0].title}`}</Text>
      <Text>{photo[0].description}</Text>
    </Container>
  );
};

export default imgDetail;
