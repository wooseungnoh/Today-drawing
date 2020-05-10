import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Img } from '../../components/uiComponent';
import Text from '../../components/text';
import Container from '../../components/container';

const imgDetail = () => {
  const { photo } = useSelector((state) => state.drawing);
  const router = useRouter();

  return (
    <Container flexDirection="column">
      <div>
        <Img src={"#"} width="500px" />
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
          >{`${"#"}`}</Text>
          <Text
            fontSize="medium"
            style={{ paddingBottom: '30px' }}
          >{`${"#"}`}</Text>
          <Text
            bold
            fontSize="huge"
            style={{ paddingBottom: '15px' }}
          >{`${"#"}`}</Text>
          <div style={{ width: '500px' }}>
            <Text>{"#"}</Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default imgDetail;
