import React, { useReducer, useState } from "react";
import { Todo } from "./components/interface";
import "./App.css";
import InputField from "./components/InputField";

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
    dispatch({ type: "add_todo", payload: todo });
    setTodo("");
  }
  console.log(state.todos);
  return (
    <div className="App">
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      {state.todos.map((todo) => {
        return <p>{todo.todo}</p>;
      })}
    </div>
  );
}

export default App;
