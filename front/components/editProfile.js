import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './styled/container';
import { EDITING_PROFILE_REQUEST, EDITING_PROFILE_OFF } from '../reducers/user';
import { Button, Input, Textarea } from './styled/uiComponent';

const EditProfile = ({ signUp }) => {
  const dispatch = useDispatch();
  const { editing, me } = useSelector((state) => state.user);
  const userWriterValue = useRef();
  const userInfomationValue = useRef();

  const [info, setInfo] = useState({
    userInfo: '',
    name: '',
  });

  useEffect(() => {
    setInfo({
      userInfo: userInfomationValue.current.value,
      name: userWriterValue.current.value,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const writerData = {
      userInfo: info.userInfo,
      writer: info.name,
    };
    dispatch({
      type: EDITING_PROFILE_REQUEST,
      data: { me, writerData },
    });
  };

  const handleModalOff = () => {
    dispatch({
      type: EDITING_PROFILE_OFF,
    });
  };

  const handleChangename = () => {
    setInfo({
      ...info,
      name: userWriterValue.current.value,
    });
  };
  const handleChangeInfo = () => {
    setInfo({
      ...info,
      userInfo: userInfomationValue.current.value,
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
        display: `${editing && me ? '' : 'none'}`,
      }}
    >
      <Container
        wsize="350px"
        hsize="400px"
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
          <Input
            type="text"
            ref={userWriterValue}
            defaultValue={me ? me.writer : ''}
            onChange={handleChangename}
            placeholder="작가명"
          />
          <Textarea
            ref={userInfomationValue}
            defaultValue={me ? me.userInfo : ''}
            onChange={handleChangeInfo}
            placeholder="작가소개"
          />
          <Container
            style={{ margin: '0', justifyContent: 'space-between' }}
            wsize="150px"
            hsize="50px"
          >
            <Button>확인</Button>
            {!signUp && <Button onClick={handleModalOff}>취소</Button>}
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default EditProfile;
