import styled, { css } from 'styled-components';

export const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
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

export const Ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: -15px;
  padding:0;
`;
export const Li = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  list-style: none;
  cursor: pointer;
  ${({ scale }) =>
    scale &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `}
`;
