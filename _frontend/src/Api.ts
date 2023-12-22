import React from "react";
import axios, { AxiosResponse } from "axios";
import { TodoInterface, NewTodoInterface } from "./TodoInterface";

export const fetchTodosAPI = async (
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
): Promise<false | AxiosResponse<TodoInterface[]>> => {
  try {
    const response: AxiosResponse<TodoInterface[]> = await axios.get<
      TodoInterface[]
    >("http://127.0.0.1:8000/api/todos/");
    setTodos(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    // loading
    return false;
  }
};

export const createTodoAPI = async (
  todo: NewTodoInterface
): Promise<false | void> => {
  try {
    const response: AxiosResponse<NewTodoInterface> =
      await axios.post<NewTodoInterface>(
        "http://127.0.0.1:8000/api/todos/",
        todo
      );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    // loading
    return false;
  }
};

export const updateTodoAPI = async (
  todo: TodoInterface
): Promise<false | void> => {
  try {
    const response: AxiosResponse<TodoInterface> =
      await axios.put<TodoInterface>(
        `http://127.0.0.1:8000/api/todos/${todo.id}/`,
        todo
      );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    // loading
    return false;
  }
};

export const deleteTodoAPI = async (id: string): Promise<false | void> => {
  try {
    const response: AxiosResponse = await axios.delete(
      `http://127.0.0.1:8000/api/todos/${id}/`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    // loading
    return false;
  }
};
