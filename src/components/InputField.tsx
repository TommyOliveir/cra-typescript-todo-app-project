import React from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd} : InputFieldProps) => {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputField;
