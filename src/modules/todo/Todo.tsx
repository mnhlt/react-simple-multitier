import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

export function Todo() {
  return (
    <>
      <TodoInput />

      <TodoList />
    </>
  );
}
