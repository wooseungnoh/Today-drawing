import React from 'react';
import Container from './container';
import Text from './text';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL_OFF } from '../reducers/drawing';
import { Button } from './uiComponent';

const AskUploadModal = () => {
  const { modalState } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  const modalOff = () => {
    dispatch({
      type: MODAL_OFF,
    });
    Router.push('/');
  };

  return (
    <Container
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#4e4e4e6b',
        zIndex: 99999,
        top: '0',
        display: `${modalState ? '' : 'none'}`,
      }}
    >
      <Container
        wsize="400px"
        hsize="250px"
        flexDirection="column"
        style={{ borderRadius: '10px', background: '#ccc' }}
      >
        <Text fontSize="big" style={{ margin: '30px', color: '#333' }}>
          방금 저장하신 그림을
          <br />
          업로드 하러 가시겠습니까?
        </Text>
        <Container
          style={{ margin: '0', justifyContent: 'space-between' }}
          wsize="150px"
          hsize="50px"
        >
          <Button onClick={modalOff}>예</Button>
          <Button onClick={modalOff}>아니오</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default AskUploadModal;
