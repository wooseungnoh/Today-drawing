import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/container';
import Text from '../components/text';
import { useSelector, useDispatch } from 'react-redux';
import { WORD_UPDATE_REQUEST } from '../reducers/drawing';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { word } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WORD_UPDATE_REQUEST,
    });
  }, []);

  const onPrompt = async () => {
    const result = prompt('주제를 입력해주세요', ['']);
    if(result !== '' || result !== null){
      const object = {
        wordName: result,
      };
      const addwordResult = await axios.post('http://localhost:5000/upload/addword', object);
      if(addwordResult.status === 200 && result){
        alert('추가성공')
      }
    }
  };

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
      {isLoggedIn ? (
        <div
          onClick={onPrompt}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '160px',
            height: '55px',
            background: '#eee',
            borderRadius: '30px',
            boxShadow: '3px 3px 5px #707070',
            position: 'fixed',
            right: '20%',
            bottom: '12%',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
          }}
        >
          <div
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: '#aaa',
              margin: '4px',
            }}
          >
            <FontAwesomeIcon
              icon={faPen}
              color="#eee"
              style={{ fontSize: '22px', margin: '12px 0' }}
            />
          </div>
          <span style={{ margin: '0 15px', color: '#707070' }}>주제 제출</span>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Home;
