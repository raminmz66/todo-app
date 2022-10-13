<template>
  <f7-list sortable sortable-enabled @sortable:sort="onSort" :class="`search-list-${pageKey}`">
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
    },
    onSort(e) {
      this.$store.dispatch('swap', { first: e.from, second: e.to })
    }
  }
}
</script>

<style>
    :root {
        --f7-list-item-header-text-color: #a7a7a7;
    }
</style>