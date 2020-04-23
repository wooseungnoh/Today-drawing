import React, { useEffect } from 'react';
import Container from '../components/container';
import { Input, Form, Textarea } from '../components/uiComponent';
import { useSelector, useDispatch } from 'react-redux';
import { UPPLOAD_CANVAS_REQUEST, ADDING_PHOTO_OFF } from '../reducers/drawing';
import { useInput } from './login';
import Router from 'next/Router';

const Upload = () => {
  const { addingPhoto } = useSelector((state) => state.drawing);
  const [title, setTitle] = useInput('');
  const [desciption, setDesciption] = useInput('');
  const dispatch = useDispatch();
  const addPhoto = (e) => {
    e.preventDefault();
    dispatch({
      type: UPPLOAD_CANVAS_REQUEST,
      data: title,
      desciption,
    });
  };

  useEffect(() => {
    if (addingPhoto) {
      Router.push('/gallery');
      dispatch({
        type: ADDING_PHOTO_OFF,
      });
    }
  }, [addingPhoto]);

  return (
    <Container flexDirection="column">
      <Container wsize="300px" hsize="300px">
        미리보기 이미지
      </Container>
      <Form onSubmit={addPhoto}>
        <label htmlFor="file">파일 선택</label>
        <Input type="file" />

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
