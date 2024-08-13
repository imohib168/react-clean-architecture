import TodoList from "../components/todo-list";
import TodoForm from "../components/todo-form";

import { useTodos } from "../todo-repository";

const Todo = () => {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{isError.message}</>;

  return (
    <main>
      <TodoForm />
      <TodoList todos={todos} />
    </main>
  );
};

export default Todo;
