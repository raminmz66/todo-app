<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import { db } from '../database/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import PageDefault from '../Layout/PageDefault.vue';
import TodoListOld from '../components/TodoListOld.vue';

export default {
  components: {
    AddTodo,
    TodoList,
    PageDefault,
    TodoListOld
},
  setup() {
    return {
      db,
      items: useObservable(
        liveQuery(() => db.todos.toArray())
      ),
    };
  },
  methods: {
      async addNote(data) {
          const id = await db.todos.add({
              text: data.text,
              done: false
          });
      },
      onTodoUpdate(e) {
        console.log(e);
      }
  },
}
</script>

<template>
  <PageDefault navbar-title="TO DO" navbar-key="todo">
    <AddTodo @add="addNote"></AddTodo>
    <TodoList :todos="items" @todoUpdate="onTodoUpdate"></TodoList>
  </PageDefault>
</template>

<style scoped>
  
</style>