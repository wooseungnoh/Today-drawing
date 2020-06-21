import React, { useEffect } from 'react';
import Link from 'next/link';
import Container from '../components/styled/container';
import Text from '../components/styled/text';
import { useSelector, useDispatch } from 'react-redux';
import { WORD_UPDATE_REQUEST } from '../reducers/drawing';
import AddWordButton from '../components/addWord'
const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { word } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WORD_UPDATE_REQUEST,
    });
  }, []);

  return (
    <Container flexDirection="column">
      <Text fontSize="mainTitle">하루 그림</Text>
      <Text style={{ marginBottom: '80px' }}>당신의 그림습관</Text>
      <Link href="/upload">
        <a>
          <Container flexDirection="column">
            <Text fontSize="massive">{`"${word}"`}</Text>
            <Text style={{ marginBottom: '80px' }} bold fontSize="big">
              업로드
            </Text>
          </Container>
        </a>
      </Link>
      <Link href="/gallery">
        <a>
          <Text style={{ margin: '30px' }} bold fontSize="huge">
            오늘의 그림들
          </Text>
        </a>
      </Link>
      {isLoggedIn ? <AddWordButton /> : <></>}
    </Container>
  );
};

export default Home;
