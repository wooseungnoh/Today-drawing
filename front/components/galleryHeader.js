import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Text from '../components/styled/text';
import {
  LOAD_GALLERY_REQUEST,
  WORD_UPDATE_REQUEST,
  LOAD_SELECT_POST_REQUEST,
} from '../reducers/drawing';
import { GalleryButton, Ul, Li } from '../components/styled/uiComponent';

const GalleryHeader = () => {
  const [subject, setSubject] = useState('');
  const [state, setState] = useState(false);
  const { oldWordList, word } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();
  const handleSubjectMenuState = () => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    dispatch({
      type: WORD_UPDATE_REQUEST,
    });
  }, []);

  const handleLoadTodayPost = () => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleLoadSelectPost = (e) => {
    dispatch({
      type: LOAD_SELECT_POST_REQUEST,
      data: { word: e.target.getAttribute('data') },
    });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ margin: '15px 0' }}>오늘의 주제 - </Text>
      <GalleryButton onClick={handleLoadTodayPost}>{`${word}`}</GalleryButton>
      <div
        style={{
          position: 'relative',
          width: '110px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button type="button" onClick={handleSubjectMenuState}>
          주제 선택
        </button>
        <Ul toggleState={state}>
          <Li>
            <input
              type="text"
              value={subject}
              onChange={handleSubject}
              style={{
                width: '100%',
                padding: '0',
                margin: '0',
                boxSizing: 'border-box',
                textAlign: 'center',
              }}
              placeholder="주제 검색"
            />
          </Li>
          {oldWordList.map((item, idx) => (
            <Li key={idx}>
              <button
                onClick={handleLoadSelectPost}
                style={{ width: '100%', border: 'none' }}
                type="button"
                data={item}
              >
                {item}
              </button>
            </Li>
          ))}
        </Ul>
      </div>
    </div>
  );
};

export default GalleryHeader;
