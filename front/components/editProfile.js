import React from 'react';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import Container from './container';
import Text from './text';
import { MODAL_OFF } from '../reducers/drawing';
import { Button, Input, Textarea } from './uiComponent';

const EditProfile = () => {
  const { editing } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const upload = () => {
    dispatch({
      type: MODAL_OFF,
    });
    Router.push('/upload');
  };

  const modalOff = () => {
    dispatch({
      type: MODAL_OFF,
    });
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
        display: `${editing ? '' : 'none'}`,
      }}
    >
      <Container
        wsize="400px"
        flexDirection="column"
        style={{ borderRadius: '10px', background: '#ccc' }}
      >
        <h3>작가 프로필</h3>
        <form>
          <Input type="text" defaultValue="작가명" />
          <Textarea>작가소개</Textarea>
        </form>
        <Container
          style={{ margin: '0', justifyContent: 'space-between' }}
          wsize="150px"
          hsize="50px"
        >
          <Button onClick={upload}>수정</Button>
          <Button onClick={modalOff}>취소</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default EditProfile;
