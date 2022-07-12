<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import { db } from '../database/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
export default {
    name: "HomeView",
    components: {
        AddTodo,
        TodoList
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
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app v-bind="{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }">
    <!-- Your main view, should have "main" prop -->
    <f7-view main>
      <!-- Initial Page -->
      <f7-page>
        <!-- Top Navbar-->
        <f7-navbar title="Awesome App"></f7-navbar>
        <!-- Toolbar-->
        <f7-toolbar bottom>
          <f7-link>Link 1</f7-link>
          <f7-link>Link 2</f7-link>
        </f7-toolbar>
        <!-- Page Content -->
        <p>Page content goes here</p>
        <f7-link href="/about/">About App</f7-link>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<style>
.container {
    text-align: center;
}
</style>