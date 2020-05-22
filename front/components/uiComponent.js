import styled, { css } from 'styled-components';

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
  box-shadow:inset 2px 2px 3px;
    background: #e3d3bc;
  }
`;

export const NavUl = styled.ul`
  position: fixed;
  z-index: 99;
  top: 0;
  display: flex;
  width: 100%;
  height: 30px;
  background: #1111116b;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 25px 0;
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
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px;
  text-align: center;
`;

export const Textarea = styled.textarea`
  width: 300px;
  ${({ edit }) =>
    edit
      ? css`
          height: 100px;
        `
      : css`
          min-height: 110px;
        `}
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
  ${({none}) => !none && css`
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
`;

export const Img = styled.img``;
