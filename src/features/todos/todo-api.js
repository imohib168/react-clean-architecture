import axiosInstance from "../../axios-instance";
import { todoAdapter, todoCreateAdapter } from "./todo-adapter";

export const todoApis = {
  fetchTodos: async () => {
    try {
      const { data } = await axiosInstance.get("/todo");
      return todoAdapter(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  fetchTodoById: async (todoId) => {
    try {
      const { data } = await axiosInstance.get(`/todo/${todoId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  postTodo: async (newTodo) => {
    try {
      const { data } = await axiosInstance.post("/todo", newTodo);
      return todoCreateAdapter(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateTodo: async ({ todoId, updatedTodo }) => {
    try {
      const { data } = await axiosInstance.put(`/todo/${todoId}`, updatedTodo);
      return todoCreateAdapter(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteTodo: async (todoId) => {
    try {
      const { data } = await axiosInstance.delete(`/todo/${todoId}`);
      return todoCreateAdapter(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
