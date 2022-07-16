<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import { db } from '../database/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import PageDefault from '../Layout/PageDefault.vue';

export default {
  components: {
    AddTodo,
    TodoList,
    PageDefault
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
      }
  }
}
</script>

<template>
  <PageDefault navbar-title="TO DO" navbar-key="todo">
    <f7-block>
      <p>
        TO DO
      </p>
    </f7-block>
  </PageDefault>
</template>

<style>

</style>