import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Text from '../components/styled/text';
import {
  LOAD_GALLERY_REQUEST,
  WORD_LOAD_REQUEST,
  LOAD_SELECT_POST_REQUEST,
  OPEN_SUBJECT_MENU,
  CLOSE_SUBJECT_MENU,
} from '../reducers/drawing';
import { GalleryButton, Ul, Li, SubjectSelectButton } from '../components/styled/uiComponent';

const GalleryHeader = () => {
  const [subject, setSubject] = useState('');
  const { oldWordList, word, popSubjectMenu } = useSelector(
    (state) => state.drawing,
  );
  const dispatch = useDispatch();
  const handleSubjectMenuState = () => {
    if (popSubjectMenu) {
      dispatch({
        type: CLOSE_SUBJECT_MENU,
      });
    } else {
      dispatch({
        type: OPEN_SUBJECT_MENU,
      });
    }
  };
  useEffect(() => {
    dispatch({
      type: WORD_LOAD_REQUEST,
    });
  }, []);

  const handleLoadTodayPost = () => {
    dispatch({
      type: LOAD_GALLERY_REQUEST,
    });
    dispatch({
      type: CLOSE_SUBJECT_MENU,
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
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const result = oldWordList.includes(subject);
      if (result) {
        dispatch({
          type: LOAD_SELECT_POST_REQUEST,
          data: { word: subject },
        });
      } else {
        alert('등록되어있지 않은 단어입니다.');
      }
    }
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
        <SubjectSelectButton type="button" onClick={handleSubjectMenuState}>
          주제 선택
        </SubjectSelectButton>
        <Ul toggleState={popSubjectMenu} subjectLength={oldWordList.length}>
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
              onKeyDown={handleSubmit}
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

export default React.memo(GalleryHeader);
