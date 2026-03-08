import {useContext, useState} from "react";
import {TodoContex} from "../../dataContext/TodoContext";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const {addTodo} = useContext(TodoContex);

  const addNewTodo = (todo: string) => {
    if (todo === "") {
      alert("Todo can not be empty");
      return;
    }
    addTodo(todo);
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
      <button onClick={() => addNewTodo(todo)}>Add</button>
    </div>
  );
};

export default TodoInput;
