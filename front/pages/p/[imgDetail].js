import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Img } from '../../components/input';
import Text from '../../components/text';
import Container from '../../components/container';

const imgDetail = () => {
  const { photo } = useSelector((state) => state.drawing);
  const router = useRouter();

  const indexNumber = photo.findIndex(
    (i) => Number(i.id) === Number(router.query.imgDetail),
   );
  return (
    <Container flex_direction="column">
      <Img src={photo[indexNumber].Img} width="500px" />
      <Text>작가 : {photo[indexNumber].creater}</Text>
      <Text>작품 제목 : {photo[indexNumber].title}</Text>
      <Text>{photo[indexNumber].description}</Text>
    </Container>
  );
};

export default imgDetail;
