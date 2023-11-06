import React from 'react'
import styled from "styled-components";

// styles
const StyledSingleTodo = styled.div`
  background-color: #8deb1a;
  padding: 5px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`;

interface SingleTodoProps {
    todo: string
}

const SingleTodo = ({todo}: SingleTodoProps) => {
  return (
    <StyledSingleTodo>
      <span>check {todo}</span> <button>x</button>
    </StyledSingleTodo>
  );
}

export default SingleTodo