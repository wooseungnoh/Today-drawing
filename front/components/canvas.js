import styled from 'styled-components';

export const Canvas = styled.canvas`
  width: 550px;
  height: 550px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 18px 18px 25px #00000057, -18px -18px 25px #ffffff;
`;

export const PainterSize = styled.div`
  position: absolute;
  width: ${({ size }) => size || '2.5'}px;
  height: ${({ size }) => size || '2.5'}px;
  background: ${({ color }) => color || '#000000'};
  border-radius: 50%;
  transform: translateX(120px);
`;
