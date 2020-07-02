import React, { useEffect, memo, useState } from 'react';
import Container from './container';
import Navigation from '../navigation';
import Loading from './loading';
import { useSelector, useDispatch } from 'react-redux';
import { OpenMenu } from './uiComponent';
import { OPEN_GLOBAL_MENU, CLOSE_GLOBAL_MENU } from '../../reducers/drawing';

const AppLayout = ({ children }) => {
  const { isUserLoadding } = useSelector((state) => state.user);
  const { isLoadding, globalMenu } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  const handleSetMenu = () => {
    if (globalMenu) {
      dispatch({
        type: CLOSE_GLOBAL_MENU,
      });
    } else {
      dispatch({
        type: OPEN_GLOBAL_MENU,
      });
    }
  };

  const handleCloseMenu = () => {
    if(globalMenu){
      dispatch({
        type: CLOSE_GLOBAL_MENU,
      });
    }
  };

  return (
    <Container
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '90%',
        height: '90%',
        background: 'rgba(0, 0, 0, 0.5)',
        margin: '0',
        borderRadius: '10px',
      }}
      flexDirection="column"
    >
      <OpenMenu onClick={handleSetMenu} menuState={globalMenu} />
      <Navigation />
      <Container style={{ paddingTop: '60px' }} onClick={handleCloseMenu}>
        {children}
      </Container>
      {isUserLoadding || isLoadding ? (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#33333348',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '99999',
          }}
        >
          <Loading />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default AppLayout;
