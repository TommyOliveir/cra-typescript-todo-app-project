import styled from "styled-components";
import { ButtonSubmitStyled } from "../addTodo/AddTodo";

export const TodoStyled = styled.div`
  background-color: #c5e1e5;
  padding: 10px 0;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
`;

export const EditInputTodoStyled = styled.input`
  outline: none;
  border: none;
  padding: 0.4em 0.5em;
  font-size: 1em;
  &:focus {
    border-bottom: 1px solid #3c89b4;
  }
`;
export const DeleteTodoButtonStyled = styled(ButtonSubmitStyled)`
  background: #eb4b1a;
  padding: 0.5em 1em;
  &:hover {
    opacity: 0.8;
    background: #eb4b1a;
  }
`;

export const EditTodoButtonStyled = styled(ButtonSubmitStyled)`
  background: #3c89b4;
  padding: 0.5em 1em;
  &:hover {
    opacity: 0.8;
    background: #35789f;
  }
`;
