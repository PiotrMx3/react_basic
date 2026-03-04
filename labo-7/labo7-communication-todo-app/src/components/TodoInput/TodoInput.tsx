import {useState} from "react";

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput = ({onAddTodo}: TodoInputProps) => {
  const [todo, setTodo] = useState("");

  const addTodo = (todo: string) => {
    onAddTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <input
        id="todo"
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Add</button>
    </div>
  );
};

export default TodoInput;
