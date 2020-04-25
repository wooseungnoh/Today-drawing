import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/Router';
import Container from '../components/container';
import { Button, Input, Form } from '../components/uiComponent';
import { LOG_IN_REQUEST } from '../reducers/user';

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Login = () => {
  const [userId, setUserId] = useInput('');
  const [userPassword, setUserPassword] = useInput('');
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: userId,
      userPassword,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  return (
    <Container>
      <Form>
        <label>로그인</label>
        <Input
          type="email"
          placeholder="이메일"
          value={userId}
          onChange={setUserId}
        />
        <Input
          type="password"
          placeholder="패스워드"
          value={userPassword}
          onChange={setUserPassword}
        />
        <Button onClick={handleLogin}>로그인</Button>
      </Form>
    </Container>
  );
};

export default Login;
