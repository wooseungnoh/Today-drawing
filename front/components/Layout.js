import React from 'react';
import Container from './container';
import Navigation from './navigation';

const AppLayout = ({ children }) => (
  <Container
    style={{
      overflow: 'hidden',
      minHeight: '700px',
    }}
    flexDirection="column"
  >
    <Navigation style={{ alignSelf: 'flex-start' }} />
    <Container style={{paddingTop:"60px"}}>{children}</Container>
  </Container>
);

export default AppLayout;
