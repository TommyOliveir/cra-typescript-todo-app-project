import React, { useReducer, useState, useCallback } from "react";
import { ITodo } from "../../components/todo/interface";
import { AddTodo } from "../../components/addTodo/AddTodo";
import { TodoList } from "../../components/todoList/TodoList";
import { FormStyled } from "./styles";

const initialState = {
  todos: [],
};

// state
interface TodosStateProps {
  todos: ITodo[];
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

export const Form = () => {
  const [todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(todosReducer, initialState);

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
  }

  return (
    <>
      <FormStyled>
        <h2>Add Task</h2>
        <AddTodo todo={todo} setTodo={setTodo} handleAdd={memoizedhandleAdd} />
        <TodoList
          todos={state.todos}
          handleDone={memoizedhandleDone}
          handleDelete={handleDelete}
          handleEditTodoSave={handleEditTodoSave}
        />
      </FormStyled>
    </>
  );
};
