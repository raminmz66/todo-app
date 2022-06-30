<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import { db } from '../database/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
export default {
    name: "HomeView",
    components: { AddTodo, TodoList },
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
    <div class="container">
        <h1>Let's start buidling a great app! :D</h1>
        <AddTodo @add="addNote"></AddTodo>
        <TodoList :todos="items"></TodoList>
    </div>
</template>

<style>
.container {
    text-align: center;
}
</style>