import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/container';
import Text from '../components/text';

const Mypage = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <Container flexDirection="column">
      <h3 style={{marginBottom:'70px'}}>마이페이지</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          minHeight: '600px',
          textAlign: 'left',
        }}
      >
        <Text fontSize="medium" style={{ marginBottom: '8px' }}>
          작가
        </Text>
        <Text fontSize="big" bold>
          {me.nickName}
        </Text>
        <br />
        <Text fontSize="medium" style={{ marginBottom: '8px' }}>
          작가 소개
        </Text>
        <Text fontSize="big" bold>
          {me.userInfo}
        </Text>
      </div>
    </Container>
  );
};

export default Mypage;
