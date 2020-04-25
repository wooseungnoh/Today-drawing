import React, { useEffect } from 'react';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import Container from './container';
import { EDITING_PROFILE_REQUEST, EDITING_PROFILE_OFF } from '../reducers/user';
import { Button, Input, Textarea } from './uiComponent';

const EditProfile = ({ signUp }) => {
  const { editing } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: EDITING_PROFILE_REQUEST,
    });
  };

  const modalOff = () => {
    dispatch({
      type: EDITING_PROFILE_OFF,
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
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Input type="text" defaultValue="작가명" />
          <Textarea>작가소개</Textarea>
          <Container
            style={{ margin: '0', justifyContent: 'space-between' }}
            wsize="150px"
            hsize="50px"
          >
            <Button>확인</Button>
            {!signUp && <Button onClick={modalOff}>취소</Button>}
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default EditProfile;
