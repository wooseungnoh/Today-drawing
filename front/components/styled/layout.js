import React, { useEffect } from 'react';
import Container from './container';
import Navigation from '../navigation';
import Loading from './loading';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import { CLOSE_SUBJECT_MENU } from '../../reducers/drawing';

const AppLayout = ({ children }) => {
  const { isUserLoadding, me } = useSelector((state) => state.user);
  const { isLoadding, popSubjectMenu } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);

  const handleSubjectMenuControll = () => {
    if (popSubjectMenu) {
      dispatch({
        type: CLOSE_SUBJECT_MENU,
      });
    }
  };

  return (
    <Container
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      flexDirection="column"
      onClick={handleSubjectMenuControll}
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
