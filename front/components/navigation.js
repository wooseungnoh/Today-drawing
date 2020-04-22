import React from 'react';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Text from '../components/text';
import { NavUl, NavLi } from './uiComponent';

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

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
      <NavLi>
        <Link href="/upload">
          <a>업로드</a>
        </Link>
      </NavLi>
      <NavLi>
        <Link href="/gallery">
          <a>갤러리</a>
        </Link>
      </NavLi>
      <NavLi>
        {isLoggedIn ? (
          <Link href="/login">
            <a>마이페이지</a>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <a>로그인</a>
            </Link>
            <Text> / </Text>
            <Link href="/signUp">
              <a>회원가입</a>
            </Link>
          </>
        )}
      </NavLi>
    </NavUl>
  );
};

export default Navigation;
