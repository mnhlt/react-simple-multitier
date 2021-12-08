import {
  addEntities,
  deleteEntities,
  updateEntities
} from "@ngneat/elf-entities";
import todoApi from "../apis/todo.api";
import todoStore, { TodoEntity } from "../stores/todo.store";

export class TodoService {
  async createTodo(todo: TodoEntity) {
    try {
      await todoApi.createTodo(todo);
      todoStore.update(addEntities(todo));
    } catch (e) {
      console.error("TodoService:createTodo", e);
      throw new Error("Cannot create todo");
    }
  }

  async updateTodo(todo: TodoEntity, updateData: any) {
    if (!todo || todo.id) {
      throw new Error("Invalid arguments");
    }

    try {
      const updated = await todoApi.updateTodo(todo, updateData);
      todoStore.update(updateEntities(todo.id, updated));
    } catch (e) {
      console.error("TodoService:updateTodo", e);
      throw new Error("Cannot update todo");
    }
  }

  deleteTodo(todo: TodoEntity) {
    if (!todo || todo.id) {
      throw new Error("Invalid arguments");
    }

    try {
      todoStore.update(deleteEntities(todo.id));
    } catch (e) {
      console.error("TodoService:deleteTodo", e);
      throw new Error("Cannot delete todo");
    }
  }
}

const todoService = new TodoService();

export default todoService;
