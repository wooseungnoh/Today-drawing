import React, { useEffect } from 'react';
import Container from './container';
import Navigation from './navigation';
import Loading from './loading';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {
  const { isUserLoadding } = useSelector((state) => state.user);
  const { isLoadding } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);

  return (
    <Container
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        minHeight: '700px',
      }}
      flexDirection="column"
    >
      <Navigation />
      <Container style={{ paddingTop: '60px' }}>{children}</Container>
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
