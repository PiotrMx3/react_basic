interface TodoItem {
  name: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: TodoItem;
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
        {todo.name}
      </span>
    </div>
  );
};

export default TodoItem;
