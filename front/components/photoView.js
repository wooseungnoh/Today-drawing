import styled from 'styled-components';
import React from 'react';

const Text = styled.span`
  transition: 0.3s;
  position: relative;
  background: #00000059;
  color: #fff;
  line-height: 35px;
  width: 100%;
  height: 35px;
  font-weight: bold;
  font-size: 15px;
  top: 35px;
`;

const ViewContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 300px;
  height: 200px;
  background: ${({ url }) => `url(${url}) no-repeat`};
  background-size: cover;
  &:hover ${Text} {
    top: 0;
  }
`;

const PhotoView = ({ creater, url }) => (
  <ViewContainer url={url}>
    <Text>{creater}</Text>
  </ViewContainer>
);
export default PhotoView;
