import {useContext} from "react";
import TodoItem from "../TodoItem/TodoItem";
import {TodoContex} from "../../dataContext/TodoContext";

const TodoList = () => {
  const {todos, markCompleted} = useContext(TodoContex);

  const todosList = [...todos];

  return (
    <div>
      {todosList.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onMarkCompleted={markCompleted}
        />
      ))}
    </div>
  );
};
export default TodoList;
