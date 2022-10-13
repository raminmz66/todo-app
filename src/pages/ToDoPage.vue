<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import PageDefault from '../Layout/PageDefault.vue';
import TodoListOld from '../components/TodoListOld.vue';

export default {
  components: {
    AddTodo,
    TodoList,
    PageDefault,
    TodoListOld
  },
  provide: {
    pageKey: 'todo'
  },
  methods: {
      addNote(data) {
        this.$store.dispatch('addTask', {
            text: data.text,
            done: 0,
            createdTime: new Date(),
            updatedTime: new Date(),
        });
      },
      onTodoUpdate(data) {
        this.$store.dispatch('updateTask', {...data, updatedTime: new Date()});
      },
      onTodoRemove(e) {
        this.$store.dispatch('removeTask', e.id);
      }
  },
  computed: {
    todoTasks() {
      return this.$store.getters.todoTasks;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTasks');
  }
}
</script>

<template>
  <PageDefault :navbar-title="$t('tabs.TODO')">
    <AddTodo @add="addNote"></AddTodo>
    <TodoList :todos="todoTasks" @todoUpdate="onTodoUpdate" @todoRemove="onTodoRemove" sortable></TodoList>
  </PageDefault>
</template>

<style scoped>
  
</style>