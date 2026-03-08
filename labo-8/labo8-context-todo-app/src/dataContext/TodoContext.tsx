import React, {createContext, useEffect, useState} from "react";

export interface ITodoItem {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}

export interface ITodoContext {
  todos: ITodoItem[];
  addTodo: (todo: string) => void;
  markCompleted: (index: number, completed: boolean) => void;
}

export const TodoContex = createContext<ITodoContext>({
  todos: [],
  addTodo: () => {},
  markCompleted: () => {},
});

export const TodoProvider = ({children}: {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, {title: todo, completed: false}]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? {...todo, completed: completed} : todo,
      ),
    );
  };

  useEffect(() => {
    let cancel = false;

    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      if (!response.ok) throw new Error("fetch failed");

      if (cancel) return;
      const data: ITodoItem[] = await response.json();
      setTodos(data);
    };

    fetchData();

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <TodoContex.Provider
      value={{todos: todos, addTodo: addTodo, markCompleted: markCompleted}}
    >
      {children}
    </TodoContex.Provider>
  );
};
