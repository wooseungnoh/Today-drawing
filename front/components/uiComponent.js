import styled from 'styled-components';

export const Button = styled.button`
  margin: 10px;
  border: none;
  outline: none;
  width: 300px;
  height: 35px;
  background: #bbb;
  border-radius: 5px;
  transition: 0.3s;
  color: #444;
  &:hover {
    background: #ccc;
  }
  &:active {
    background: #888;
  }
`;

export const NavUl = styled.ul`
  position: fixed;
  z-index: 99;
  top: 0;
  display: flex;
  width: 100%;
  height: 30px;
  background: #3f3f3f6b;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px 0;
`;
export const NavLi = styled.li`
  font-weight: bold;
  color: #333;
  list-style: none;
  margin: 0 10px;
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
`;

export const Textarea = styled.textarea`
  width: 300px;
  min-height: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px;
  text-align: center;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
