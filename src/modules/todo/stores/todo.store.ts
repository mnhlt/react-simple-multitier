import { createState, Store } from "@ngneat/elf";
import { withEntities } from "@ngneat/elf-entities";
import { localStorageStrategy, persistState } from "@ngneat/elf-persist-state";

export class TodoEntity {
  id: number;
  title: string;
  isDone: boolean;
}

const { state, config } = createState(withEntities<TodoEntity>());

const todoStore = new Store({ name: "todos", state, config });

export const persist = persistState(todoStore, {
  key: "todos",
  storage: localStorageStrategy
});

export default todoStore;
