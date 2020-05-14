import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/Router';
import Container from '../components/container';
import { Input, Form, Textarea } from '../components/uiComponent';
import {
  UPPLOAD_CANVAS_REQUEST,
  DELETE_PHOTO,
  UPPLOAD_POST_REQUEST,
  UPPLOADING_DONE,
} from '../reducers/drawing';
import { useInput } from './login';

const Upload = () => {
  const { imagePaths, isUploadingPost } = useSelector((state) => state.drawing);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [title, setTitle] = useInput('');
  const [description, setDescription] = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/login');
    }
  }, [isLoggedIn]);

  const addPhoto = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch({
        type: UPPLOAD_POST_REQUEST,
        data: { title, description, imagePaths },
      });
    } else {
      alert('작성 권한이 없습니다. 로그인페이지로 이동합니다.');
      Router.push('/login');
    }
  };

  const handlePhotoFile = (e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('photo', f);
    });
    dispatch({
      type: UPPLOAD_CANVAS_REQUEST,
      data: imageFormData,
    });
  };

  const handleDeleteImage = () => {
    dispatch({
      type: DELETE_PHOTO,
    });
  };

  useEffect(() => {
    if (isUploadingPost) {
      handleDeleteImage();
      dispatch({
        type: UPPLOADING_DONE,
      });
      Router.push('/gallery');
    }
  }, [isUploadingPost]);

  return (
    <Container flexDirection="column">
      <div
        style={{
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
        }}
      >
        {imagePaths[0] ? (
          <div style={{ position: 'relative' }}>
            <img
              src={`http://localhost:5000/${imagePaths[0]}`}
              style={{ width: '100%' }}
              alt={imagePaths[0]}
            />
            <button
              onClick={handleDeleteImage}
              style={{ position: 'absolute', top: '5px', right: '5px' }}
            >
              X
            </button>
          </div>
        ) : (
          <span>미리보기 이미지</span>
        )}
      </div>

      <Form onSubmit={addPhoto} encType="multipart/form-data">
        <label htmlFor="file">파일 선택</label>
        <Input
          type="file"
          name="photo"
          onChange={handlePhotoFile}
          accept="image/*"
        />

        <label>그림 제목</label>
        <Input value={title} onChange={setTitle} type="text" />

        <label>그림 설명</label>
        <Textarea
          value={description}
          onChange={setDescription}
          style={{ resize: 'none' }}
        />
        <Input type="submit" value="작성" />
      </Form>
    </Container>
  );
};

export default Upload;
