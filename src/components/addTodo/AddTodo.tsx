import React, { useRef, useEffect } from "react";
import {
  ButtonSubmitStyled,
  AddTodoWrapperStyled,
  InputStyled,
} from "./styles";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const AddTodo = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [todo]);

  return (
    <form
      action=""
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <AddTodoWrapperStyled>
        <InputStyled
          ref={inputRef}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <ButtonSubmitStyled>Add</ButtonSubmitStyled>
      </AddTodoWrapperStyled>
    </form>
  );
};
export { ButtonSubmitStyled };
