import React from "react";
import styled from "styled-components";

// styles
const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between
`;

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <StyledInputContainer>
          <input style={{width: '90%', padding: '4px'}}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Save</button>
        </StyledInputContainer>
      </form>
    </div>
  );
};

export default InputField;
