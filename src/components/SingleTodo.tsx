import React, { useState } from "react";
import styled from "styled-components";
// import { MdDone } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { StyledButton } from "./InputField";

// styles
const StyledSingleTodo = styled.div`
  /* background-color: #8deb1a; */
  border-top: solid 1px #b5b5b0;
  padding: 10px 0;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
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
  background: #00ba00;
  padding: 0.5em 1em;
  &:hover {
    opacity: 0.8;
    background: #12860e;
  }
`;

interface SingleTodoProps {
  todo: string;
  handleDone: (e: React.FormEvent, id: number) => void;
  id: number;
  handleDelete: (e: React.FormEvent, id: number) => void;
  handleEditTodoSave: (e: React.FormEvent, id: number) => void;
  isdone: boolean;
}

const SingleTodo = ({
  todo,
  handleDone,
  id,
  handleDelete,
  handleEditTodoSave,
  isdone,
}: SingleTodoProps) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");

  const handleCurrentEdit = () => {
    if (!checked) {
      setEdit(true);
    }
  };

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  function handleSave() {
    console.log('save')
  }

  return (
    <StyledSingleTodo>
      <span>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckChange}
          onClick={(e) => handleDone(e, id)}
        />

        {edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        ) : (
          <span>{checked ? <s> {todo}</s> : todo}</span>
        )}
      </span>
      <span>
        {" "}
        {/* <StyledEditButton onClick={(e) => handleEdit(e, id)}> */}
        <StyledEditButton onClick={edit ? handleSave : handleCurrentEdit}>
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
