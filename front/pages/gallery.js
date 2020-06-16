import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, { GalleryContainer } from '../components/container';
import Text from '../components/text';
import PhotoView from '../components/photoView';
import styled from 'styled-components'
import {
  LOAD_GALLERY_REQUEST,
  WORD_UPDATE_REQUEST,
  LOAD_ALLGALLERY_REQUEST,
} from '../reducers/drawing';
import { GalleryButton } from '../components/uiComponent';

const Ul = styled.ul`
  position: absolute;
  display: inline-block;
  width: 100px;
  list-style: none;
  transition: 0.5s;
  overflow: hidden;
  height: ${({ on }) => (on ? "115px" : "0")};
  text-align: center;
  top:25px;
  padding: 0 5px;
  margin: 0;
  background: #cfcfcf;
`;
const Li = styled.li`
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background: #efefef;
  border-radius: 5px;
  margin: 2px 0;
  :first-child {
    border: none;
    background: none;
    input {
      height: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
`;

const Gallery = () => {
  const [subject, setSubject] = useState("");
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.drawing);
  const { word } = useSelector((state) => state.drawing);

  const handleState = () => {
    setState(prev => !prev);
  };
  const handleSubject = e => {
    setSubject(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
    dispatch({
      type: WORD_UPDATE_REQUEST,
    });
  }, []);

  const loadTodayPost = () => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
  };

  const loadAllPost = () => {
    dispatch({
      type: LOAD_ALLGALLERY_REQUEST,
    });
  };

  return (
    <Container flexDirection="column" justifyContent="flex-start">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ margin: '15px 0' }}>오늘의 주제 - </Text>
        <GalleryButton onClick={loadTodayPost}>{`${word}`}</GalleryButton>
        <div style={{ position: 'relative', width: "110px", display: "flex", flexDirection: "column" }}>
          <button onClick={handleState}>주제 선택</button>
          <Ul on={state}>
            <Li>
              <input
                type="text"
                value={subject}
                onChange={handleSubject}
                style={{
                  width: "100%",
                  padding: "0",
                  margin: "0",
                  boxSizing: "border-box"
                }}
              />
            </Li>
            <Li>똥꼬</Li>
            <Li>똥꼬</Li>
            <Li>똥꼬</Li>
          </Ul>
        </div>
      </div>
      <Container
        flexDirection="column"
        hsize="85%"
        wsize="70%"
        style={{
          justifyContent: 'flex-start',
          overflowY: 'scroll',
        }}
      >
        <GalleryContainer>
          {postList ? (
            postList.map((item) => {
              const { id } = item;
              return (
                <Link key={id} href="/p/[imgDetail]" as={`/p/${item._id}`}>
                  <a>
                    <PhotoView
                      creater={item.title}
                      url={`http://localhost:5000/${item.fileUrl}`}
                    />
                  </a>
                </Link>
              );
            })
          ) : (
              <></>
            )}
        </GalleryContainer>
      </Container>
    </Container>
  );
};

export default Gallery;
