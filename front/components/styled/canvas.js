import styled, { css } from 'styled-components';

export const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
  border-radius: 15px;
  background: #ffffff;
  border:2px solid #eee;
  @media(max-width:800px){
    display:none;
  }
`;

export const MobileText = styled.span`
display:none;
@media(max-width:800px){
    display:block;
  }
`

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
  bottom: -40px;
  padding:0;
  @media(max-width:800px){
    display:none;
  }
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
