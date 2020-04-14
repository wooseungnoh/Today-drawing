import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flex_direction }) => flex_direction || 'row'};
  text-align: center;
  width: ${({ wsize }) => wsize || '1024px'};
  height: ${({ hsize }) => hsize || '100%'};
`;

export default Container;
