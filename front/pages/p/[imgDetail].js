import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Img } from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';

const imgDetail = () => {
  const { photo } = useSelector((state) => state.drawing);
  const router = useRouter();

  const indexNumber = photo.findIndex(
    (i) => Number(i.id) === Number(router.query.imgDetail),
  );
  return (
    <Container flexDirection="column">
      <div>
        <Img src={photo[indexNumber].Img} width="500px" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            margin: '10px 0 ',
          }}
        >
          <Text
            bold
            fontSize="big"
            style={{ padding: '15px 0' }}
          >{`${photo[indexNumber].creater}`}</Text>
          <Text
            fontSize="medium"
            style={{ paddingBottom: '30px' }}
          >{`${photo[indexNumber].createAt}`}</Text>
          <Text
            bold
            fontSize="huge"
            style={{ paddingBottom: '15px' }}
          >{`${photo[indexNumber].title}`}</Text>
          <div style={{ width: '500px' }}>
            <Text>{photo[indexNumber].description}</Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default imgDetail;
