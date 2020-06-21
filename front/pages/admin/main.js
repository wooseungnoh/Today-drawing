import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from '../../components/admin/table';

const Wrap = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
`;
const Category = styled.div`
  flex: 1;
  background: #eee;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: flex-start;
  align-items: flex-start;
  background: #aaa;
`;

const admin = () => {
  const [state, setState] = useState(true);
  const onUser = () => {
    setState(true);
  };
  const onPost = () => {
    setState(false);
  };

  return (
    <Wrap style={{ display: 'flex' }}>
      <Category>
        <ul>
          <li onClick={onUser}>회원관리</li>
          <li onClick={onPost}>게시물관리</li>
        </ul>
      </Category>
      <Table change={state}></Table>
    </Wrap>
  );
};

export default admin;
