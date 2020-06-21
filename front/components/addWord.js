import React from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const AddWordButton = () => {
  const onPrompt = async () => {
    const result = prompt('주제를 입력해주세요', ['']);
    if (result !== '' && result !== null) {
      const object = {
        wordName: result,
      };
      const addwordResult = await axios.post(
        'http://localhost:5000/upload/addword',
        object,
      );
      if (addwordResult.status === 200 && result) {
        alert('추가성공');
      }
    }
  };

  return (
    <button
      type="button"
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
    </button>
  );
};

export default AddWordButton;
