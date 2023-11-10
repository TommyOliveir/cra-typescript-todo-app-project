import React, { useState } from "react";
import styled from "styled-components";
// import { MdDone } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { StyledButton } from "./InputField";
import { Todo } from "./interface";

// styles
const StyledSingleTodo = styled.div`
  /* background-color: #8deb1a; */
  border-top: solid 1px #b5b5b0;
  padding: 10px 0;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const StyledInputEdit = styled.input`
  outline: none;
  border: none;
  padding: 0.4em 0.5em;
  font-size: 1em;
  &:focus {
 
    border-bottom: 1px solid #3c89b4;
  }
`;
const StyledDeleteButton = styled(StyledButton)`
  background: #eb4b1a;
  padding: 0.5em 1em;
  &:hover {
    opacity: 0.8;
    background: #eb4b1a;
  }
`;

const StyledEditButton = styled(StyledButton)`
  background: #3c89b4;
  padding: 0.5em 1em;
  &:hover {
    opacity: 0.8;
    background: #35789f;
  }
`;

interface SingleTodoProps {
  todo: string;
  handleDone: (e: React.FormEvent, id: number) => void;
  id: number;
  handleDelete: (e: React.FormEvent, id: number) => void;
  handleEditTodoSave: (e: React.FormEvent, id: number, payload: string) => void;
  isdone: boolean;
  todos: Todo[];
}

const SingleTodo = ({
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
      setEdit(false)
      handleEditTodoSave(e, id, editTodo)
     
    };


  return (
    <StyledSingleTodo>
      <span>
        <input
          type="checkbox"
          checked={checked}
          disabled={edit ? true : false}
          onChange={handleCheckChange}
          onClick={(e) => handleDone(e, id)}
        />

        {edit ? (
          <StyledInputEdit
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <span style={{padding: ".5em"}}>{checked ? <s> {todo}</s> : todo}</span>
        )}
      </span>
      <span>
        {" "}
        {/* <StyledEditButton onClick={(e) => handleEdit(e, id)}> */}
        <StyledEditButton
          onClick={edit ? handleCurrentSave : handleCurrentEdit}
          style={{ background: edit ? "#00ba00" : "" }}
        >
          <AiFillEdit />
          {edit ? "save" : "edit"}
        </StyledEditButton>
        <StyledDeleteButton onClick={(e) => handleDelete(e, id)}>
          <AiFillDelete />
        </StyledDeleteButton>
      </span>
    </StyledSingleTodo>
  );
};

export default SingleTodo;
