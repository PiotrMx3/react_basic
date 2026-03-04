import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodoItem[];
  onMarkCompleted: (index: number, marked: boolean) => void;
}

interface ITodoItem {
  name: string;
  completed: boolean;
}

const TodoList = ({todos, onMarkCompleted}: TodoListProps) => {
  const todosList = [...todos];

  return (
    <div>
      {todosList.map((todo, index) => (
        <TodoItem todo={todo} index={index} onMarkCompleted={onMarkCompleted} />
      ))}
    </div>
  );
};
export default TodoList;
