import {type ITodoItem} from "../../dataContext/TodoContext";

interface TodoItemProps {
  todo: ITodoItem;
  index: number;
  onMarkCompleted: (index: number, checked: boolean) => void;
}

const TodoItem = ({todo, index, onMarkCompleted}: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(event) => onMarkCompleted(index, event.target.checked)}
      />
      <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
        {todo.title}
      </span>
    </div>
  );
};

export default TodoItem;
