import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import {TodoProvider} from "./dataContext/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
