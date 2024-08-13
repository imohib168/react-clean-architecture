import { useMutation, useQuery, useQueryClient } from "react-query";
import { todoApis } from "./todo-api";

export const useTodos = () => {
  return useQuery(["todos"], todoApis.fetchTodos, {
    refetchOnWindowFocus: false,
  });
};

export const useTodoById = (todoId) => {
  return useQuery(["todo", todoId], () => todoApis.fetchTodoById(todoId), {
    enabled: !!todoId,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 2,
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(todoApis.postTodo, {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(todoApis.updateTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["todo", data._id]);
      queryClient.invalidateQueries(["todos"]);
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(todoApis.deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
};
