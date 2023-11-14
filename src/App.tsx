import React, {
  useReducer,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
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
  overflow-x: hidden;
`;

const StyledSloganDiv = styled.div`
  /* border: 1px red solid; */
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

// const initialState = {
//   todos: [],
// };

// state
interface TodosStateProps {
  todos: Todo[];
}

// actions

interface TodoAddAction {
  type: "add_todo";
  payload: string;
}

interface TodoDoneDeleteAction {
  type: "done_todo" | "delete_todo";
  payload: number;
}

interface TodoSaveEditedAction {
  type: "saveEdited_todo";
  payload: string;
  id: number; // Add this line
}

type TodosAction = TodoAddAction | TodoDoneDeleteAction | TodoSaveEditedAction;

function todosReducer(state: TodosStateProps, action: TodosAction) {
  const { type, payload } = action;

  switch (type) {
    case "add_todo":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), todo: payload, isDone: false },
        ],
      };
    case "done_todo":
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case "delete_todo":
      return {
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "saveEdited_todo":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, todo: payload } : todo
        ),
      };
    default:
      return state;
  }
}

function App() {
  const [todo, setTodo] = useState<string>("");
  // const [state, dispatch] = useReducer(todosReducer, initialState);
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [state, dispatch] = useReducer(todosReducer, { todos: storedTodos });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add_todo", payload: todo });
      setTodo("");
    }
  }
  const memoizedhandleAdd = useCallback(handleAdd, [todo]);

  function handleDone(e: React.FormEvent, id: number) {
    dispatch({ type: "done_todo", payload: id });
    console.log("done", id);
  }
  const memoizedhandleDone = useCallback(handleDone, [state.todos]);

  function handleDelete(e: React.FormEvent, id: number) {
    dispatch({ type: "delete_todo", payload: id });
    console.log("delete", id);
  }

  function handleEditTodoSave(e: React.FormEvent, id: number, payload: string) {
    dispatch({ type: "saveEdited_todo", id, payload });
    console.log("edit", id);
    console.log("editedsave");
  }
  console.log(state.todos);

  const memoizeTodoList = useMemo(() => {
    return (
      <TodoList
        todos={state.todos}
        handleDone={memoizedhandleDone}
        handleDelete={handleDelete}
        handleEditTodoSave={handleEditTodoSave}
      />
    );
  }, [state.todos]);

  return (
    <>
      <div className="App">
        <StyledTodo>
          <h2>To-do-List</h2>
          <InputField
            todo={todo}
            setTodo={setTodo}
            handleAdd={memoizedhandleAdd}
          ></InputField>

          {/* <TodoList
            todos={state.todos}
            handleDone={memoizedhandleDone}
            handleDelete={handleDelete}
            handleEditTodoSave={handleEditTodoSave}
          /> */}
          {memoizeTodoList}
        </StyledTodo>
        <StyledSloganDiv>
          <StyledSlogan>
            Build <span style={{ color: "orange" }}>To-Do</span> List{" "}
            <span style={{ fontSize: "40px" }}>with Typescript</span>{" "}
          </StyledSlogan>
        </StyledSloganDiv>
      </div>
    </>
  );
}

export default App;
