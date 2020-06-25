import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Text from './styled/text';
import { NavUl, NavLi } from './styled/uiComponent';
import { LOG_OUT_REQUEST } from '../reducers/user';

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };

  return (
    <NavUl>
      <NavLi>
        <Link href="/">
          <a>홈</a>
        </Link>
      </NavLi>
      <NavLi>
        <Link href="/drawing">
          <a>그림그리기</a>
        </Link>
      </NavLi>
      {isLoggedIn ? (
        <NavLi>
          <Link href="/upload">
            <a>업로드</a>
          </Link>
        </NavLi>
      ) : (
        <></>
      )}

      <NavLi>
        <Link href="/gallery">
          <a>갤러리</a>
        </Link>
      </NavLi>
      <NavLi>
        {isLoggedIn ? (
          <>
            <Link href="/mypage">
              <a>마이페이지</a>
            </Link>
            <Text style={{ color: '#fff', padding: '0 5px' }}>/</Text>
            <button
              onClick={handleLogout}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'black',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#eee',
                padding: '0',
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </>
        )}
      </NavLi>
    </NavUl>
  );
};

export default Navigation;
