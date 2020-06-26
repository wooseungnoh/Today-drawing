import styled, { css } from 'styled-components';

export const GalleryContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(2, 300px);
  grid-gap: 10px;
  margin-bottom: 30px;
  ${({ mypage }) =>
    mypage &&
    css`
      height: 220px;
      overflow-y: scroll;
      grid-template-rows: repeat(2, 200px);
      @media (max-width: 700px) {
        grid-template-columns: repeat(1, 300px);
        overflow-x: hidden;
      }
    `}
  @media (max-width:700px) {
    grid-template-columns: repeat(1, 300px);
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  text-align: center;
  width: ${({ wsize }) => wsize || '100%'};
  height: ${({ hsize }) => hsize || '100%'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
`;

export default Container;
