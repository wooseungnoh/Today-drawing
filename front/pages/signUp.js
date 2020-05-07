import React, { useState, useEffect } from 'react';
import Router from 'next/Router';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/container';
import EditProfile from '../components/editProfile';
import { Button, Input, Form } from '../components/uiComponent';
import { useInput } from './login';
import { SIGN_UP_REQUEST } from '../reducers/user';

const SignUp = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [checkPasswordError, setPasswordCheckError] = useState(false);
  const [userPasswordCheck, setUserPasswordCheck] = useState('');

  const [userName, setUserName] = useInput('');
  const [userEmail, setUserEmail] = useInput('');
  const [userPassword, setUserPassword] = useInput('');

  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  const signUp = (e) => {
    e.preventDefault();
    if (userPassword !== userPasswordCheck) {
      return setPasswordCheckError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email: userEmail,
        password: userPassword,
        name: userName,
      },
    });
  };

  const passwordCheck = (e) => {
    setPasswordCheckError(e.target.value !== userPassword);
    setUserPasswordCheck(e.target.value);
  };

  return (
    <>
      <EditProfile signUp />
      <Container>
        <Form onSubmit={signUp}>
          <label>회원가입</label>
          <Input
            id="name"
            type="text"
            placeholder="이름"
            value={userName}
            onChange={setUserName}
            required
          />
          <Input
            type="email"
            placeholder="이메일"
            value={userEmail}
            onChange={setUserEmail}
            required
          />
          <Input
            type="password"
            placeholder="패스워드"
            value={userPassword}
            onChange={setUserPassword}
            required
          />
          <Input
            type="password"
            placeholder="패스워드 확인"
            value={userPasswordCheck}
            onChange={passwordCheck}
            required
          />
          {checkPasswordError && (
            <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
          )}
          <Button>회원가입</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
