import { useState } from "react";
import todoService from "../services/todo.service";
import { TodoEntity } from "../stores/todo.store";
export function useTodoInput() {
  const [error, setError] = useState("");

  const createTodo = async (title: string) => {
    const todo = new TodoEntity();
    todo.title = title;

    try {
      await todoService.createTodo(todo);
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    error,
    createTodo
  };
}
