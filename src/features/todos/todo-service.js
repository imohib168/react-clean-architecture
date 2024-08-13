import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "./todo-repository";

export const useTodoService = () => {
  const createMutation = useCreateTodo();
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();

  const addTodo = (newTodo) => {
    if (!newTodo.title && !newTodo.isDone) {
      throw new Error("Title & isDone fields are required");
    }

    const todoPayload = {
      title: newTodo.title,
      description: newTodo?.description,
      isDone: newTodo.isDone,
    };

    createMutation.mutate(todoPayload);
  };

  const editTodo = (updatedTodo) => {
    updateMutation.mutate({ todoId: updatedTodo._id, updatedTodo });
  };

  const removeTodo = (todoId) => {
    if (!todoId) {
      throw new Error("Todo ID is required");
    }

    deleteMutation.mutate(todoId);
  };

  return {
    addTodo: { action: addTodo, ...createMutation },
    editTodo: { action: editTodo, ...updateMutation },
    removeTodo: { action: removeTodo, ...deleteMutation },
  };
};
