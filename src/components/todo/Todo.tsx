import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ITodo } from "./interface";
import {
  DeleteTodoButtonStyled,
  EditTodoButtonStyled,
  EditInputTodoStyled,
  TodoStyled,
} from "./styles";

interface SingleTodoProps {
  todo: string;
  handleDone: (e: React.FormEvent, id: number) => void;
  id: number;
  handleDelete: (e: React.FormEvent, id: number) => void;
  handleEditTodoSave: (e: React.FormEvent, id: number, payload: string) => void;
  isdone: boolean;
  todos: ITodo[];
}

export const Todo = ({
  todo,
  todos,
  handleDone,
  id,
  handleDelete,
  handleEditTodoSave,
  isdone,
}: SingleTodoProps) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);

  const handleCurrentEdit = () => {
    if (!checked) {
      setEdit(true);
    }
  };

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  const handleCurrentSave = (e: React.FormEvent) => {
    setEdit(false);
    handleEditTodoSave(e, id, editTodo);
  };

  const handleKeyDownSaveEditTodo = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      // The Enter key was pressed
      handleCurrentSave(e);
    }
  };

  return (
    <TodoStyled>
      <span>
        <input
          type="checkbox"
          checked={checked}
          disabled={edit ? true : false}
          onChange={handleCheckChange}
          onClick={(e) => handleDone(e, id)}
        />

        {edit ? (
          <EditInputTodoStyled
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            onKeyDown={(e) => handleKeyDownSaveEditTodo(e)}
          />
        ) : (
          <span style={{ padding: ".5em" }}>
            {checked ? <s> {todo}</s> : todo}
          </span>
        )}
      </span>
      <span>
        <EditTodoButtonStyled
          onClick={edit ? handleCurrentSave : handleCurrentEdit}
          style={{ background: edit ? "#00ba00" : "" }}
        >
          <AiFillEdit />
          {edit ? "save" : "edit"}
        </EditTodoButtonStyled>
        <DeleteTodoButtonStyled onClick={(e) => handleDelete(e, id)}>
          <AiFillDelete />
        </DeleteTodoButtonStyled>
      </span>
    </TodoStyled>
  );
};
