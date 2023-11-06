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
}

const SingleTodo = ({ todo }: SingleTodoProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <StyledSingleTodo>
      <span>
        {" "}
        <input type="checkbox" checked={checked} onChange={handleChange} />{" "}
        {checked ? <s> {todo}</s> : todo}
      </span>{" "}
      <button>x</button>
    </StyledSingleTodo>
  );
};

export default SingleTodo;
