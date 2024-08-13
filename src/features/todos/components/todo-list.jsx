import { Link } from "react-router-dom";
import { useTodoService } from "../todo-service";

const TodoList = ({ todos = [] }) => {
  const { removeTodo, editTodo } = useTodoService();

  return todos?.map((todo) => (
    <section key={todo._id} style={{ display: "flex", marginBlock: "10px" }}>
      <input
        id="isDone"
        name="isDone"
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => editTodo.action({ ...todo, isDone: e.target.checked })}
      />

      <Link
        to={`/todo/${todo._id}`}
        style={{ marginInline: "20px", textDecoration: "none" }}
      >
        {todo.title}
      </Link>

      <button
        onClick={() => removeTodo.action(todo._id)}
        disabled={removeTodo.isLoading}
      >
        delete
      </button>
    </section>
  ));
};

export default TodoList;
