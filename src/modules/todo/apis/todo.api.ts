import { TodoEntity } from "../stores/todo.store";

export class TodoApi {
  async createTodo(todo: TodoEntity): Promise<TodoEntity> {
    todo.id = Date.now();
    return todo;
  }

  async updateTodo(todo: TodoEntity, updateData): Promise<TodoEntity> {
    Object.assign(todo, updateData);
    return todo;
  }
}

const todoApi = new TodoApi();

export default todoApi;
