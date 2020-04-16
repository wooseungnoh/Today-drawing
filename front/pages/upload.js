import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/container';
import styled from 'styled-components';

const Ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 45px;
`;
const Li = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  list-style: none;
  cursor: pointer;
`;
const Canvas = styled.canvas`
  width: 700px;
  height: 700px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 18px 18px 25px #00000057, -18px -18px 25px #ffffff;
`;

const RangeInput = styled.input``;

const InputContainer = styled.div`
  height: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  position: absolute;
  right: 30px;
`;

const PainterSize = styled.div`
  position: absolute;
  width: ${({ size }) => size || '2.5'}px;
  height: ${({ size }) => size || '2.5'}px;
  background: ${({color}) => color || "#000000"};
  border-radius: 50%;
  transform: translateX(120px);
`;

const Upload = () => {
  const [lineSize, setLineSize] = useState(2.5);
  const [canvasState, setCanvasState] = useState({
    painter: false,
    strokeStyle: '#000',
    lineWidth: 2.5,
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
    })
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

  useEffect(() => {
    canvas.current.width = 700;
    canvas.current.height = 700;

    const ctx = canvas.current.getContext('2d');

    ctx.strokeStyle = canvasState.strokeStyle;
    ctx.lineWidth = canvasState.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  return (
    <Container
      style={{ padding: '50px', position: 'relative', width: '700px' }}>
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
        <PainterSize size={lineSize} color={canvasState.strokeStyle}/>
        <RangeInput
          type="range"
          min="0.1"
          max="100"
          defaultValue={lineSize}
          onChange={lineChange}
          onMouseUp={lineWidthChange}
        />
      </InputContainer>
    </Container>
  );
};

export default Upload;
