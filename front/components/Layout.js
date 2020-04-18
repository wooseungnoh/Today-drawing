import React from 'react';
import Container from './container';
import Navigation from './navigation';

const AppLayout = ({ children }) => (
  <div
    style={{
      display:"flex",
      alignItems:"center",
      overflow: 'hidden',
      position: 'relative',
      minHeight: '700px',
      minWidth: '1024px',
    }}>
    <Navigation style={{alignSelf:"flex-start"}}/>
    <Container>{children}</Container>
  </div>
);

export default AppLayout;
