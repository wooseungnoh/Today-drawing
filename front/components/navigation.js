import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const PopupMenu = styled.div`
  position: absolute;
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
        console.log('디스플레이 온');
        setPopUpState({
          opacity: '0',
          display: 'block',
        });
        setTimeout(() => {
          console.log('오퍼시티 1');
          setPopUpState({
            display: 'block',
            opacity: '0.7',
          });
        }, 10);
      }, 0);
    } else {
      setTimeout(() => {
        console.log('디스플레이 오프');
        setPopUpState({
          display: 'block',
          opacity: '0',
        });
        setTimeout(() => {
          console.log('디스플레이 논');
          setPopUpState({
            opacity: '0',
            display: 'none',
          });
        }, 510);
      }, 0);
    }
  });

  return (
    <div style={{display:"inline-block", position:"absolute"}}>
      <FontAwesomeIcon
        icon={faEllipsisV}
        size={'2x'}
        style={{ cursor: 'pointer', padding:"10px 20px" }}
        onClick={handelMenuState}
      />
      <PopupMenu opacity={popUpState.opacity} display={popUpState.display}>
        <ul>
          <li><Link href="/"><a>홈</a></Link></li>
          <li><Link href="/upload"><a>업로드</a></Link></li>
          <li>마이페이지</li>
          <li>마이페이지</li>
          <li>마이페이지</li>
          <li>마이페이지</li>
        </ul>
      </PopupMenu>
    </div>
  );
};

export default Navigation;
