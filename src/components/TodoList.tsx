import React from "react";
import { Todo } from "./interface";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  handleDone: (e: React.FormEvent, id: number) => void;
  handleDelete: (e: React.FormEvent, id: number) => void;
}

const TodoList = ({ todos, handleDone, handleDelete }: TodoListProps) => {
  return (
    <div>
      TodoList
      {todos.map((todo) => {
        return (
          <>
            <SingleTodo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
