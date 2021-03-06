import styled, { css } from 'styled-components';

export const SubjectSelectButton = styled.button`
  width: 110px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background: #e0cfb6;
`;

export const ButtonAddword = styled.button`
  align-items: center;
  width: 55px;
  height: 55px;
  background: #cccccc6b;
  border-radius: 30px;
  box-shadow: 3px 3px 5px;
  position: fixed;
  right: 20%;
  bottom: 10%;
  cursor: pointer;
  border: none;
  outline: none;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    width: 160px;
  }
  @media (max-width: 1024px) {
    width: 160px;
    right: 50%;
    margin-right: -80px;
  }
`;

export const SaveButton = styled.button`
  margin: 10px;
  border: none;
  outline: none;
  width: 300px;
  height: 25px;
  background: #e0cfb6;
  border-radius: 5px;
  transition: 0.3s;
  color: #555;
  &:hover {
    background: #f0e1cc;
  }
  &:active {
    box-shadow: inset 2px 2px 3px;
    background: #e3d3bc;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 10px;
  border: none;
  outline: none;
  width: 300px;
  height: 25px;
  background: #e0cfb6;
  border-radius: 5px;
  transition: 0.3s;
  color: #555;
  &:hover {
    background: #f0e1cc;
  }
  &:active {
    box-shadow: inset 2px 2px 3px;
    background: #e3d3bc;
  }
`;

export const OpenMenu = styled.button`
  position: absolute;
  outline: none;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  display: none;
  z-index: 100;
  transition: 0.3s;
  @media (max-width: 700px) {
    display: block;
    ${({ menuState }) =>
      menuState
        ? css`
            background: url('../../static/close-solid.svg') no-repeat;
            background-position-x: 5px;
          `
        : css`
            background: url('../../static/menu-solid.svg') no-repeat;
          `}
  }
`;

export const NavUl = styled.ul`
  position: absolute;
  z-index: 99;
  top: 0;
  display: flex;
  width: 100%;
  height: 30px;
  background: #ffffff6b;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 25px 0;
  border-radius: 10px 10px 0 0;
  @media (max-width: 700px) {
    overflow: hidden;
    background: #0000009b;
    width: 0;
    border-radius: 0;
    right: 0;
    height: 100%;
    flex-direction: column;
    transition: 0.3s;
    font-size: 1.5rem;
    ${({ menuState }) =>
      menuState
        ? css`
            width: 250px;
          `
        : css`
            width: 0;
          `}
  }
`;
export const NavLi = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 50px;
  color: #333;
  list-style: none;
  margin: 0 15px;
  transition: 0.5s;
  text-align: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px;
  text-align: center;
  ${({ file }) =>
    file &&
    css`
      color: transparent;
      display: flex;
      align-items: center;
      border: none;
      width: 85px;
      height: 25px;
    `}
`;

export const Textarea = styled.textarea`
  width: 300px;
  ${({ edit }) =>
    edit
      ? css`
          height: 10vh;
        `
      : css`
          height: 10vh;
        `};
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px;
  text-align: center;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ none }) =>
    !none &&
    css`
      align-items: center;
    `}
`;

export const InputContainer = styled.div`
  height: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  position: absolute;
  right: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Img = styled.div`
  height: 100%;
  width:40vh;
  max-height: 400px;
  max-width: 300px;
  background: url(${({ background }) => background && `${background}`}) no-repeat center;
  background-size:contain;
`;

export const GalleryButton = styled.button`
  border: none;
  background: none;
  color: #eee;
  font-weight: bold;
  font-size: 19px;
`;

export const Ul = styled.ul`
  position: absolute;
  display: inline-block;
  width: 100%;
  list-style: none;
  transition: 0.5s;
  height: ${({ toggleState }) => (toggleState ? '200px' : '0')};
  ${({ subjectLength }) =>
    subjectLength < 7
      ? css`
          overflow-y: hidden;
        `
      : css`
          overflow-y: scroll;
        `}
  text-align: center;
  top: 25px;
  padding: 0 5px;
  margin: 0;
  background: #cfcfcf5b;
  border-radius: 5px;
`;
export const Li = styled.li`
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background: #efefef;
  border-radius: 5px;
  margin: 2px 0;
  :first-child {
    border: none;
    background: none;
    input {
      height: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
`;
