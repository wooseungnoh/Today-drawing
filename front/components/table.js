import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_DATA_REQUEST } from '../reducers/admin';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: flex-start;
  align-items: flex-start;
  background: #aaa;
`;

const Table = ({ change }) => {
  const { user } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('실행');
    dispatch({
      type: LOAD_USER_DATA_REQUEST,
    });
  }, []);

  return (
    <Main>
      {change ? (
        <>
          <h2 style={{ textAlign: 'center', width: '100%' }}>회원관리</h2>
          <table style={{ textAlign: 'center', width: '100%' }}>
            <tbody>
              <tr>
                <th>번호</th>
                <th>ID</th>
                <th>이름</th>
                <th>작가명</th>
                <th>가입일</th>
                <th>관리</th>
              </tr>
              {user.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.writer}</td>
                  <td>{item.createAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </Main>
  );
};

export default Table;
