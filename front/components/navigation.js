import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const PopupMenu = styled.div`
  position: absolute;
  z-index: 9;
  width: 300px;
  height: 500px;
  background: #aaa;
  border-radius: 10px;
  transition: 0.5s;
  opacity: ${({ opacity }) => opacity};
  display: ${({ display }) => display};
`;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [popUpState, setPopUpState] = useState({
    opacity: '0',
    display: 'none',
  });

  const handelMenuState = useCallback(() => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setTimeout(() => {
        setPopUpState({
          opacity: '0',
          display: 'block',
        });
        setTimeout(() => {
          setPopUpState({
            display: 'block',
            opacity: '0.7',
          });
        }, 10);
      }, 0);
    } else {
      setTimeout(() => {
        setPopUpState({
          display: 'block',
          opacity: '0',
        });
        setTimeout(() => {
          setPopUpState({
            opacity: '0',
            display: 'none',
          });
        }, 510);
      }, 0);
    }
  });

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'absolute',
        alignSelf: 'flex-start',
      }}
    >
      <FontAwesomeIcon
        icon={faEllipsisV}
        size={'2x'}
        style={{ cursor: 'pointer', padding: '10px 20px' }}
        onClick={handelMenuState}
      />
      <PopupMenu opacity={popUpState.opacity} display={popUpState.display}>
        <ul>
          <li>
            <Link href="/">
              <a>홈</a>
            </Link>
          </li>
          <li>
            <Link href="/drawing">
              <a>업로드</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>갤러리</a>
            </Link>
          </li>
          <li>마이페이지</li>
          <li>마이페이지</li>
          <li>마이페이지</li>
        </ul>
      </PopupMenu>
    </div>
  );
};

export default Navigation;
