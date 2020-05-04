import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/container';
import Text from '../components/text';
import { Button } from '../components/uiComponent';
import { EDITING_PROFILE_REQUEST, SIGN_UP_SUCCESS } from '../reducers/user';
import EditProfile from '../components/editProfile';

const Mypage = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const editProfile = (e) => {
    e.preventDefault();
    dispatch({
      type: SIGN_UP_SUCCESS,
    });
  };

  return (
    <>
      <EditProfile />
      <Container flexDirection="column">
        <h3 style={{ marginBottom: '70px' }}>마이페이지</h3>
        <Button onClick={editProfile}>Edit Profile</Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            minHeight: '600px',
            textAlign: 'left',
          }}
        >
          <Text fontSize="medium" style={{ marginBottom: '8px' }}>
            작가
          </Text>
          <Text fontSize="big" bold>
            {me.nickName}
          </Text>
          <br />
          <Text fontSize="medium" style={{ marginBottom: '8px' }}>
            작가 소개
          </Text>
          <Text fontSize="big" bold>
            {me.userInfo}
          </Text>
        </div>
      </Container>
    </>
  );
};

export default Mypage;
