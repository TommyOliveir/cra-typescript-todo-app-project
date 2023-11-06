import React from "react";
import { Todo } from "./interface";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      TodoList
      {todos.map((todo) => {
        return (
          <>
            <SingleTodo todo={todo.todo} />
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
