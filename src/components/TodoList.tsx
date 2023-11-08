import React,{memo} from "react";
import { Todo } from "./interface";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  handleDone: (e: React.FormEvent, id: number) => void;
  handleDelete: (e: React.FormEvent, id: number) => void;
  handleEditTodoSave: (e: React.FormEvent, id: number) => void;
}
const TodoList = memo(
  ({ todos, handleDone, handleDelete, handleEditTodoSave }: TodoListProps) => {
    // const TodoList = ({ todos, handleDone, handleDelete }: TodoListProps) => {
    console.log("todlist");
    return (
      <div>
        {todos.map((todo) => {
          return (
            <>
              <SingleTodo
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                isdone={todo.isDone}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEditTodoSave={handleEditTodoSave}
              />
            </>
          );
        })}
      </div>
    );
  }
);

export default TodoList;
