import { useTodoInput } from "../../hooks";

export function TodoInput() {
  const { error, createTodo } = useTodoInput();

  const onKeyDown = async (e: { key: string; target: any }) => {
    if (e.key === "Enter") {
      await createTodo(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input type="text" onKeyDown={onKeyDown} />
      <button>Add</button>
    </div>
  );
}
