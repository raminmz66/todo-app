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
        liveQuery(() => {
          const todayStart = new Date();
          const todayEnd = new Date();
          todayStart.setHours(0,0,0,0);
          todayEnd.setHours(23,59,59,999);
          let todos = db.todos
            .where('done')
            .equals(0)
            .or('updatedTime')
            .between(todayStart,todayEnd,true,true);
          return todos.reverse().sortBy('id');
        })
      ),
    };
  },
  methods: {
      async addNote(data) {
        await db.todos.add({
            text: data.text,
            done: 0,
            createdTime: new Date(),
            updatedTime: new Date(),
        });
      },
      async onTodoUpdate(data) {
        await db.todos.update(data.id, {...data, updatedTime: new Date()});
      },
      async onTodoRemove(e) {
        await db.todos.delete(e.id);
      }
  },
}
</script>

<template>
  <PageDefault navbar-title="TO DO" navbar-key="todo">
    <AddTodo @add="addNote"></AddTodo>
    <TodoList :todos="items" @todoUpdate="onTodoUpdate" @todoRemove="onTodoRemove"></TodoList>
  </PageDefault>
</template>

<style scoped>
  
</style>