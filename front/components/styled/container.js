import styled, { css } from 'styled-components';

export const GalleryContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 10px;
  margin-bottom: 30px;
  padding: 0 20px;
  ${({ postLength }) => {
    if (postLength > 6) {
      return css`
        overflow-y: scroll;
      `;
    } else if (postLength === 0) {
      return css`
        grid-template-columns: repeat(1, 400px);
        overflow-y: hidden;
      `;
    } else {
      return css`
        overflow-y: hidden;
      `;
    }
  }}

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 300px);
    overflow-x: hidden;
    ${({ postLength }) =>
      postLength > 4
        ? css`
            overflow-y: scroll;
          `
        : css`
            overflow-y: hidden;
          `}
    ${({ postLength }) => {
      if (postLength > 6) {
        return css`
          overflow-y: scroll;
        `;
      } else if (postLength === 0) {
        return css`
          grid-template-columns: repeat(1, 400px);
          overflow-y: hidden;
        `;
      } else {
        return css`
          overflow-y: hidden;
        `;
      }
    }}
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 300px);
    overflow-x: hidden;
    ${({ postLength }) =>
      postLength > 3
        ? css`
            overflow-y: scroll;
          `
        : css`
            overflow-y: hidden;
          `}
  }
  ${({ mypage }) =>
    mypage &&
    css`
      height: 220px;
      ${({ postLength }) => {
        if (postLength > 2) {
          return css`
            overflow-y: scroll;
          `;
        } else if (postLength === 0) {
          return css`
            grid-template-columns: repeat(1, 400px);
            overflow-y: hidden;
          `;
        } else {
          return css`
            overflow-y: hidden;
          `;
        }
      }}
      @media (max-width: 700px) {
        grid-template-columns: repeat(1, 300px);
        overflow-x: hidden;
      }
    `}
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
