import React, { useReducer, useState } from "react";
import { Todo } from "./components/interface";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import styled from "styled-components";

// styles
const StyledTodo = styled.div`
  background-color: #f7f7f7;
  width: 600px;
  height: 600px;
  padding: 30px;
  border-radius: 10px;
`;

const StyledSloganDiv = styled.div`
  border: 1px red solid;
  width: 600px;
  overflow-wrap: break-word;
  display: grid;
  place-items: center;
`;

const StyledSlogan = styled.h1`
  color: #fff;
  font-size: 80px;
  margin: 0;
`;

const initialState = {
  todos: [],
};

// An interface for our actions
interface todoAction {
  type: string;
  payload: string;
}

// An interface for our state
interface initialStateProps {
  todos: Todo[];
}

function todosReducer(state: initialStateProps, action: todoAction) {
  const { type, payload } = action;
  switch (type) {
    case "add_todo":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), todo: payload, isDone: false },
        ],
      };
    default:
      return state;
  }
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(todosReducer, initialState);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add_todo", payload: todo });
      setTodo("");
    }
  }
  console.log(state.todos);
  return (
    <>
      <div className="App">
        <StyledTodo>
          <h2>To-do-List</h2>
          <InputField
            todo={todo}
            setTodo={setTodo}
            handleAdd={handleAdd}
          ></InputField>
          <TodoList todos={state.todos} />
        </StyledTodo>
        <StyledSloganDiv>
          <StyledSlogan>
            Build <span style={{ color: "orange" }}>To-Do</span> List <span style={{ fontSize: "40px" }}>with Typescript</span>{" "}
          </StyledSlogan>
        </StyledSloganDiv>
      </div>
    </>
  );
}

export default App;
