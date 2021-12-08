import { useTodoList } from "../../hooks";
import { TodoLine } from "../TodoLine/TodoLine";

export function TodoList() {
  const { todos } = useTodoList();

  return (
    <div>
      {todos.map((todo) => (
        <TodoLine key={todo.id} title={todo.title} isDone={todo.isDone} />
      ))}
    </div>
  );
}
