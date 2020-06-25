import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/Router';
import Container from '../components/styled/container';
import { Button, Input, Form } from '../components/styled/uiComponent';
import { LOG_IN_REQUEST } from '../reducers/user';

const StyledA = styled.a`
  font-size: 14px;
  margin: 10px;
  border: none;
  outline: none;
  width: 300px;
  height: 25px;
  background: #e0cfb6;
  border-radius: 5px;
  transition: 0.3s;
  color: #555;
  line-height:25px;
  &:hover {
    background: #f0e1cc;
  }
  &:active {
    box-shadow: inset 2px 2px 3px;
    background: #e3d3bc;
  }
`;

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
      data: { email: userId, password: userPassword },
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
        <Link href="/signUp">
          <StyledA>회원가입</StyledA>
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
