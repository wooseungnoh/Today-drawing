import React from 'react';
import Container from './container';
import Text from '../components/text';
import Navigation from './navigation';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default AppLayout;
