import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CompactPicker } from 'react-color';
import React, { useEffect, useRef, useState } from 'react';
import AskUploadModal from '../components/askUploadModal';
import Container from '../components/styled/container';
import { SaveButton, InputContainer } from '../components/styled/uiComponent';
import { Canvas, PainterSize, Ul, Li, MobileText } from '../components/styled/canvas';
import { MODAL_ON } from '../reducers/drawing';

const Input = styled.input``;

const Upload = () => {
  const [colorPicker, setColorPicker] = useState(false);
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

  const handleChangeColor = (color) => {
    const ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = color.hex;
    setCanvasState({
      ...canvasState,
      strokeStyle: `${color.hex}`,
    });
  };

  const togleState = () => {
    setColorPicker((prev) => !prev);
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
          style={{
            padding: '15px 0 15px 0',
            width: '580px',
            height: '530px',
            position: 'relative',
          }}
        >
          <Canvas
            ref={canvas}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
          />
          <MobileText>모바일 기기는 지원하지 않습니다.</MobileText>
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
          <Ul>
            <Li
              scale
              style={{ backgroundColor: '#000000' }}
              onClick={colorChange}
            />
            <Li
              scale
              style={{ backgroundColor: '#00a8ff' }}
              onClick={colorChange}
            />
            <Li
              scale
              style={{ backgroundColor: '#9c88ff' }}
              onClick={colorChange}
            />
            <Li
              scale
              style={{ backgroundColor: '#fbc531' }}
              onClick={colorChange}
            />
            <Li
              scale
              style={{ backgroundColor: '#e84118' }}
              onClick={colorChange}
            />
            <Li
              scale
              style={{ backgroundColor: '#ffffff', border: '1px solid black' }}
              onClick={colorChange}
            />
            <Li>
              <div
                onClick={togleState}
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'url("/static/color_circle.png")',
                  borderRadius: '50%',
                  backgroundSize: 'cover',
                }}
              ></div>
              {colorPicker ? (
                <div
                  style={{ position: 'relative', left: '-230px', top: '-140px' }}
                >
                  <CompactPicker
                    color={canvasState.strokeStyle}
                    onChangeComplete={handleChangeColor}
                  />
                </div>
              ) : (
                  <></>
                )}
            </Li>
          </Ul>
        </Container>
        <SaveButton style={{ marginTop: '25px' }} onClick={handleSave}>
          SAVE
        </SaveButton>
      </Container>
    </>
  );
};

export default Upload;
