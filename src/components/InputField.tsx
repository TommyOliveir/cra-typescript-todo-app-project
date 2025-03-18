import React, { useRef, useEffect } from "react";
import styled from "styled-components";

// styles
const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1em;
  outline: none;
  border-radius: 2px;
  border: 1px #6a6868 solid;
  &:focus {
    box-shadow: 0 0 5px rgb(255, 165, 0);
    border: 1px solid rgb(255, 165, 0);
  }
`;

export const StyledButton = styled.button`
  background: #ffa500;
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
    background: #f09d02;
  }
`;

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;

}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [todo]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <StyledInputContainer>
          <StyledInput
            ref={inputRef}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <StyledButton>Add</StyledButton>
        </StyledInputContainer>
      </form>
    </div>
  );
};

export default InputField;
