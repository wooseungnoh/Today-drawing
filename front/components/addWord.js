import React from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonAddword } from '../components/styled/uiComponent';
import axios from 'axios';

const AddWordButton = () => {
  axios.defaults.baseURL = 'http://18.181.73.53';

  const onPrompt = async () => {
    const result = prompt('주제를 입력해주세요', ['']);
    if (result !== '' && result !== null) {
      const object = {
        wordName: result,
      };
      const addwordResult = await axios.post('/upload/addword', object);
      if (addwordResult.status === 200 && result) {
        alert('추가성공');
      }
    }
  };

  return (
    <ButtonAddword type="button" onClick={onPrompt}>
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          left: '1px',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          background: '#bf9d8c',
          margin: '4px',
          verticalAlign: 'middle',
          top: '1px',
        }}
      >
        <FontAwesomeIcon
          icon={faPen}
          style={{ fontSize: '22px', margin: '12px 0', color: '#eee' }}
        />
      </div>
      <span
        style={{
          width: '60px',
          margin: '0 15px',
          color: '#eee',
          display: 'inline-block',
          verticalAlign: 'middle',
          position: 'absolute',
          left: '55px',
          top: '21px',
        }}
      >
        주제 제출
      </span>
    </ButtonAddword>
  );
};

export default AddWordButton;
