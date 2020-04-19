import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  text-align: center;
  width: ${({ wsize }) => wsize || '1024px'};
  height: ${({ hsize }) => hsize || '100%'};
`;

export default Container;
