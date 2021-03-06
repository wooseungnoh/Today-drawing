import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  LOAD_DATA_REQUEST,
  REMOVE_USER_DATA_REQUEST,
  REMOVE_POST_REQUEST,
  EDITING_ROLE_REQUEST,
} from '../../reducers/admin';

const Main = styled.div`
  width:80%;
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: flex-start;
  align-items: flex-start;
  background: #aaa;
  overflow-y:scroll;
`;

const Table = ({ change }) => {
  const { user, post } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_DATA_REQUEST,
    });
  }, []);

  const handleSecession = (e) => {
    const userId = { id: e.target.getAttribute('data') };
    dispatch({
      type: REMOVE_USER_DATA_REQUEST,
      data: userId,
    });
  };

  const handleRemovePost = (e) => {
    const postId = { id: e.target.getAttribute('data') };
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: postId,
    });
  };

  const handleSubmit = (e) => {
    const role = e.target.value;
    const id = e.target.getAttribute('data');
    dispatch({
      type: EDITING_ROLE_REQUEST,
      data: { objectId: id, role },
    });
  };

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
                <th>권한수정</th>
                <th>관리</th>
              </tr>
              {user.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.writer}</td>
                  <td>{item.createAt}</td>
                  <td>
                    <select
                      defaultValue={`${item.role}`}
                      onChange={handleSubmit}
                      data={item._id}
                    >
                      <option value="user">일반회원</option>
                      <option value="admin">관리자</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      data={item._id}
                      onClick={handleSecession}
                    >
                      탈퇴
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', width: '100%' }}>게시물 관리</h2>
          <table style={{ textAlign: 'center', width: '100%' }}>
            <tbody>
              <tr>
                <th>게시한 날짜</th>
                <th>게시물사진</th>
                <th>주제</th>
                <th>타이틀</th>
                <th>내용</th>
                <th>작성자</th>
                <th>관리</th>
              </tr>
              {post.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.createAt.split('T')[0]}</td>
                  <td style={{ width: '90px' }}>
                    <img
                      src={`${item.fileUrl}`}
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>{item.subject}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.creator ? item.creator.name : '탈퇴한회원'}</td>
                  <td>
                    <button
                      type="button"
                      data={item._id}
                      onClick={handleRemovePost}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Main>
  );
};

export default Table;
