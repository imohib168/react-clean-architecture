import { useParams } from "react-router-dom";
import { useTodoById } from "../todo-repository";
import { useTodoService } from "../todo-service";

const TodoDetails = () => {
  const { id } = useParams();

  const { editTodo } = useTodoService();

  const { data: todo, isLoading } = useTodoById(id);

  if (isLoading) return <>Loading...</>;

  return (
    <section>
      <input
        id="isDone"
        name="isDone"
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => editTodo.action({ ...todo, isDone: e.target.checked })}
      />
      <p>{todo?._id || ""}</p>
      <p>{todo?.title || ""}</p>
    </section>
  );
};

export default TodoDetails;
