import { selectAllApply } from "@ngneat/elf-entities";
import { useObservable } from "@ngneat/react-rxjs";
import todoStore from "../stores/todo.store";

export function useTodoList(isDone?: boolean) {
  let todos$ = todoStore.pipe(
    selectAllApply({
      mapEntity: (e) => e,
      filterEntity: (todo) =>
        typeof isDone === "undefined" || todo.isDone === isDone
    })
  );

  const [todos] = useObservable(todos$);

  return {
    todos
  };
}
