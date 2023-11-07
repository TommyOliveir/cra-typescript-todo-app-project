import React from "react";
import styled from "styled-components";
// import { MdDone } from "react-icons/md";

// styles
const StyledSingleTodo = styled.div`
  background-color: #8deb1a;
  padding: 5px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`;

interface SingleTodoProps {
  todo: string;
  handleDone: (e: React.FormEvent, id: number) => void;
  id: number;
  handleDelete: (e: React.FormEvent, id: number) => void;
}

const SingleTodo = ({
  todo,
  handleDone,
  id,
  handleDelete,
}: SingleTodoProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
console.log('singletodo')
  return (
    <StyledSingleTodo>
      <span>
        {" "}
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onClick={(e) => handleDone(e, id)}
        />{" "}
        {checked ? <s> {todo}</s> : todo}
      </span>{" "}
      <button onClick={(e) => handleDelete(e, id)}>x</button>
    </StyledSingleTodo>
  );
};

export default SingleTodo;
