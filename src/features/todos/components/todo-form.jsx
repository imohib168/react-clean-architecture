import { useState } from "react";
import { useTodoService } from "../todo-service";

const initialTodo = { title: "", isDone: false, description: "" };

const TodoForm = () => {
  const { addTodo } = useTodoService();

  const [todo, setTodo] = useState(initialTodo || {});

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo.action(todo);
    setTodo(initialTodo);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />

      <button type="submit" disabled={addTodo.isLoading}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
