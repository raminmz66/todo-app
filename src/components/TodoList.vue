<template>
  <f7-list>
    <ToDoListItem v-for="todo in todos" :todo="todo" @update="onTodoUpdate"></ToDoListItem>
  </f7-list>
</template>

<script>
import ToDoListItem from './ToDoListItem.vue';
export default {
    props: {
        todos: Array
    },
    components: { ToDoListItem },
    methods: {
      onTodoUpdate(e) {
        this.$emit("todoUpdate", e);
      }
    }
}
</script>

<style>
    :root {
        --f7-list-item-header-text-color: #a7a7a7;
    }
</style>