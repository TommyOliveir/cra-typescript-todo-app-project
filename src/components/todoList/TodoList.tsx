import React, { memo } from "react";
import { ITodo } from "../todo/interface";
import { Todo } from "../todo/Todo";
import { TodoListStyled } from "./styles";

interface TodoListProps {
  todos: ITodo[];
  handleDone: (e: React.FormEvent, id: number) => void;
  handleDelete: (e: React.FormEvent, id: number) => void;
  handleEditTodoSave: (e: React.FormEvent, id: number, payload: string) => void;
}
export const TodoList = memo(
  ({ todos, handleDone, handleDelete, handleEditTodoSave }: TodoListProps) => {
    return (
      <TodoListStyled>
        {todos.map((todo) => {
          return (
            <>
              <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                todos={todos}
                isdone={todo.isDone}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEditTodoSave={handleEditTodoSave}
              />
            </>
          );
        })}
      </TodoListStyled>
    );
  }
);
