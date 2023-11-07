import React, { useRef, useEffect } from "react";
import styled from "styled-components";

// styles
const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background: #ffa500;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 1em 2em;
  margin-left: 5px;
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

  console.log("inpuField");

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
          <input
            ref={inputRef}
            style={{ width: "90%", padding: "10px", fontSize: "1em" }}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <StyledButton>Save</StyledButton>
        </StyledInputContainer>
      </form>
    </div>
  );
};

export default InputField;
