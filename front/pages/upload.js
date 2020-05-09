import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/Router';
import Container from '../components/container';
import { Input, Form, Textarea } from '../components/uiComponent';
import { UPPLOAD_CANVAS_REQUEST } from '../reducers/drawing';
import { useInput } from './login';

const Upload = () => {
  const { imagePaths } = useSelector((state) => state.drawing);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [title, setTitle] = useInput('');
  const [desciption, setDesciption] = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  const addPhoto = (e) => {
    e.preventDefault();
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

  return (
    <Container flexDirection="column">
      <Container wsize="300px" hsize="300px">
        {imagePaths[0] ? <img src={`http://localhost:5000/${imagePaths[0]}`} style={{ width: '100%' }} alt={imagePaths[0]} /> : <span>미리보기 이미지</span>}

      </Container>
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
        <Textarea value={desciption} onChange={setDesciption} />
        <Input type="submit" value="작성" />
      </Form>
    </Container>
  );
};

export default Upload;
