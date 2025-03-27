import styled from "styled-components";

export const AddTodoWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const InputStyled = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1em;
  outline: none;
  border-radius: 2px;
  border: 1px #6a6868 solid;
  &:focus {
    box-shadow: 0 0 5px rgb(173, 216, 230); /* Light Blue shadow */
    border: 1px solid rgb(173, 216, 230); /* Light Blue border */
  }
`;

export const ButtonSubmitStyled = styled.button`
  background: #3c89b4;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 1em 2em;
  margin-left: 5px;
  transition: all 100ms ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    opacity: 0.8;
    background: #35789f;
  }
`;
