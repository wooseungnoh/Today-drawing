import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Text from './styled/text';
import { NavUl, NavLi } from './styled/uiComponent';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { CLOSE_GLOBAL_MENU } from '../reducers/drawing';

const Navigation = () => {
  const { isLoggedIn, me } = useSelector((state) => state.user);
  const { globalMenu } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };

  const handleCloseMenu = () => {
    dispatch({
      type: CLOSE_GLOBAL_MENU,
    });
  };

  return (
    <NavUl menuState={globalMenu}>
      <NavLi>
        <Link href="/">
          <a onClick={handleCloseMenu}>홈</a>
        </Link>
      </NavLi>
      <NavLi>
        <Link href="/drawing">
          <a onClick={handleCloseMenu}>그림그리기</a>
        </Link>
      </NavLi>
      {isLoggedIn ? (
        <NavLi>
          <Link href="/upload">
            <a onClick={handleCloseMenu}>업로드</a>
          </Link>
        </NavLi>
      ) : (
        <></>
      )}

      <NavLi>
        <Link href="/gallery">
          <a onClick={handleCloseMenu}>갤러리</a>
        </Link>
      </NavLi>
      <NavLi>
        {isLoggedIn ? (
          <>
            <Link href="/mypage">
              <a onClick={handleCloseMenu}>마이페이지</a>
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
          <Link href="/login">
            <a onClick={handleCloseMenu}>로그인</a>
          </Link>
        )}
      </NavLi>
      <NavLi>
        {isLoggedIn && me.role === 'admin' ? (
          <Link href="/admin/main">
            <a onClick={handleCloseMenu} style={{ padding: '0 5px' }}>
              관리자페이지
            </a>
          </Link>
        ) : (
          <></>
        )}
      </NavLi>
    </NavUl>
  );
};

export default React.memo(Navigation);
