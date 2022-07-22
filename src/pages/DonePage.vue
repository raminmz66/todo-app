<script>
import PageDefault from '../Layout/PageDefault.vue';
import TodoList from '../components/TodoList.vue';
import { db } from '../database/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";

export default {
  components: {
    PageDefault,
    TodoList,
  },
  setup() {
    return {
      db,
      items: useObservable(
        liveQuery(() => {
          let todos = db.todos
            .where('done')
            .equals(1)
            .and(todo => todo.updatedTime.getDate() !== new Date().getDate());
          return todos.reverse().sortBy('id');
        })
      ),
   };
  },
  methods: {
    async onTodoUpdate(data) {
      await db.todos.update(data.id, {...data, updatedTime: new Date().toDateString()});
    },
    async onTodoRemove(data) {
      await db.todos.delete(data.id);
    }
  },
}
</script>

<template>
  <PageDefault navbar-title="DONE" navbar-key="done">
    <TodoList :todos="items" @todoUpdate="onTodoUpdate" @todoRemove="onTodoRemove"></TodoList>
  </PageDefault>
</template>

<style>

</style>