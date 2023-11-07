import React from "react";
import styled from "styled-components";
// import { MdDone } from "react-icons/md";
import { StyledButton } from "./InputField";

// styles
const StyledSingleTodo = styled.div`
  background-color: #8deb1a;
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
      <StyledDeleteButton onClick={(e) => handleDelete(e, id)}>x</StyledDeleteButton>
    </StyledSingleTodo>
  );
};

export default SingleTodo;
