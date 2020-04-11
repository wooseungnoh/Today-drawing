import React from 'react';
import Container from './container';
import Text from '../components/text';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Text>레이아웃 입니다.</Text>
      {children}
    </Container>
  );
};

export default AppLayout;
