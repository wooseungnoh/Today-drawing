import styled, { css } from 'styled-components';

export const GalleryContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(2, 300px);
  grid-gap: 10px;
  margin-bottom: 30px;
  ${({mypage}) => mypage && css`
  grid-template-rows: repeat(2, 200px);
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  text-align: center;
  width: ${({ wsize }) => wsize || '100%'};
  height: ${({ hsize }) => hsize || '100%'};
`;

export default Container;
