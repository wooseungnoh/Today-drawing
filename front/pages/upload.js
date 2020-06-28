import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/Router';
import Container from '../components/styled/container';
import { Input, Form, Textarea } from '../components/styled/uiComponent';
import {
  UPPLOAD_CANVAS_REQUEST,
  DELETE_PHOTO,
  UPPLOAD_POST_REQUEST,
  UPPLOADING_DONE,
  DONOT_DUPLICATION_ON,
} from '../reducers/drawing';
import { useInput } from './login';
import Text, { Heading } from '../components/styled/text';

const Upload = () => {
  const { imagePaths, isUploadingPost, word, addingPhoto, pod } = useSelector(
    (state) => state.drawing,
  );
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
    if (isLoggedIn && addingPhoto) {
      if(pod){
        dispatch({
          type: UPPLOAD_POST_REQUEST,
          data: { title, description, imagePaths, word },
        });
        dispatch({
          type: DONOT_DUPLICATION_ON,
        });
      }
    } else if (addingPhoto === false) {
      alert('사진을 추가해야 합니다.');
    } else {
      alert('작성 권한이 없습니다. 로그인페이지로 이동합니다.');
      Router.push('/login');
    }
  };

  const handlePhotoFile = (e) => {
    handleDeleteImage();
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
    return () => {
      dispatch({
        type: DELETE_PHOTO,
      });
    };
  }, []);

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
      <Heading>당신의 그림을 자랑해보세요</Heading>
      <Text fontSize="tiny" style={{ paddingBottom: '10px' }}>
        어떤 그림이든 좋아요
      </Text>
      <div
        style={{
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          paddingBottom: '10px',
        }}
      >
        {imagePaths[0] ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              src={imagePaths[0]}
              style={{ height: '100%' }}
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.1)',
              borderRadius: '5px',
            }}
          >
            <span>미리보기 이미지</span>
          </div>
        )}
      </div>

      <Form onSubmit={addPhoto} encType="multipart/form-data">
        <label htmlFor="file">파일 선택</label>
        <Input
          type="file"
          name="photo"
          onChange={handlePhotoFile}
          accept="image/*"
          required
        />

        <label>그림 제목</label>
        <Input value={title} onChange={setTitle} type="text" required />

        <label>그림 설명</label>
        <Textarea
          value={description}
          onChange={setDescription}
          style={{ resize: 'none' }}
          required
        />
        <Input type="submit" value="작성" />
      </Form>
    </Container>
  );
};

export default Upload;
