<template>
  <f7-list :class="`search-list-${pageKey}`">
    <ToDoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @update="onTodoUpdate" @remove="onTodoRemove"></ToDoListItem>
  </f7-list>
</template>

<script>
import ToDoListItem from './ToDoListItem.vue';
export default {
  inject: ['pageKey'],
  props: {
      todos: Array
  },
  components: { ToDoListItem },
  methods: {
    onTodoUpdate(e) {
      this.$emit("todoUpdate", e);
    },
    onTodoRemove(e) {
      this.$emit("todoRemove", e);
    }
  }
}
</script>

<style>
    :root {
        --f7-list-item-header-text-color: #a7a7a7;
    }
</style>