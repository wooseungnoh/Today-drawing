import React from 'react';
import Container from '../components/container';
import { Input, Form, Textarea } from '../components/uiComponent';

const Upload = () => {
  return (
    <Container flexDirection="column">
      <Container wsize="300px" hsize="300px">미리보기 이미지</Container>
      <Form>
        <label>파일 선택</label>
        <Input type="file" />

        <label>그림 제목</label>
        <Input type="text" />

        <label>그림 설명</label>
        <Textarea />
      </Form>
    </Container>
  );
};

export default Upload;
