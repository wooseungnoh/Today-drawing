import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import AskUploadModal from '../components/askUploadModal';
import Container from '../components/container';
import { Button, InputContainer } from '../components/uiComponent';
import { Canvas, PainterSize, Ul, Li } from '../components/canvas';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL_ON } from '../reducers/drawing';
import styled from 'styled-components'

const Input = styled.input``;

const Upload = () => {
  const { modalState } = useSelector((state) => state.drawing);
  const dispatch = useDispatch();
  const [lineSize, setLineSize] = useState(2.5);
  const [canvasState, setCanvasState] = useState({
    painter: false,
    strokeStyle: '#000',
    lineWidth: 2.5,
    defaultCanvasSize: 500,
  });
  const canvas = useRef();

  const startPainting = () => {
    setCanvasState({
      ...canvasState,
      painter: true,
    });
  };

  const stopPainting = () => {
    setCanvasState({
      ...canvasState,
      painter: false,
    });
  };
  const onMouseMove = (e) => {
    const { offsetY: y, offsetX: x } = e.nativeEvent;
    const ctx = canvas.current.getContext('2d');

    if (!canvasState.painter) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const colorChange = (e) => {
    const ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = e.nativeEvent.target.style.backgroundColor;
    setCanvasState({
      ...canvasState,
      strokeStyle: e.nativeEvent.target.style.backgroundColor,
    });
  };

  const lineWidthChange = (e) => {
    const ctx = canvas.current.getContext('2d');
    const size = e.nativeEvent.target.value;
    ctx.lineWidth = size;
  };

  const lineChange = (e) => {
    const size = e.nativeEvent.target.value;
    setLineSize(size);
  };

  const handleSave = () => {
    const image = canvas.current.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'myImg';
    link.click();
    setTimeout(() => {
      dispatch({
        type: MODAL_ON,
      });
    }, 2500);
  };

  useEffect(() => {
    canvas.current.width = canvasState.defaultCanvasSize;
    canvas.current.height = canvasState.defaultCanvasSize;

    const ctx = canvas.current.getContext('2d');

    ctx.strokeStyle = canvasState.strokeStyle;
    ctx.lineWidth = canvasState.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.fillRect(
      0,
      0,
      canvasState.defaultCanvasSize,
      canvasState.defaultCanvasSize,
    );
  }, []);

  return (
    <>
      <AskUploadModal modalState={modalState} />
      <Container flexDirection="column">
        <h2 style={{ margin: 0 }}>그림 그리기</h2>
        <Container
          style={{ padding: '30px', position: 'relative', width: '700px' }}
        >
          <Canvas
            ref={canvas}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
          />
          <Ul>
            <Li style={{ backgroundColor: '#000000' }} onClick={colorChange} />
            <Li style={{ backgroundColor: '#00a8ff' }} onClick={colorChange} />
            <Li style={{ backgroundColor: '#9c88ff' }} onClick={colorChange} />
            <Li style={{ backgroundColor: '#fbc531' }} onClick={colorChange} />
            <Li style={{ backgroundColor: '#e84118' }} onClick={colorChange} />
            <Li
              style={{ backgroundColor: '#ffffff', border: '1px solid black' }}
              onClick={colorChange}
            />
          </Ul>
          <InputContainer>
            <PainterSize size={lineSize} color={canvasState.strokeStyle} />
            <Input
              type="range"
              min="0.1"
              max="100"
              defaultValue={lineSize}
              onChange={lineChange}
              onMouseUp={lineWidthChange}
            />
          </InputContainer>
        </Container>
        <Button onClick={handleSave}>SAVE</Button>
      </Container>
    </>
  );
};

export default Upload;
