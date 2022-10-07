<script>
import PageDefault from '../Layout/PageDefault.vue';
import TodoList from '../components/TodoList.vue';

export default {
  components: {
    PageDefault,
    TodoList,
  },
  provide: {
    selectableItems: false,
    editableItems: false,
    undonableItems: true,
    pageKey: 'done'
  },
  methods: {
    onTodoUpdate(data) {
      this.$store.dispatch('updateTask', {...data, updatedTime: new Date()});
    },
    onTodoRemove(data) {
      this.$store.dispatch('removeTask', data.id);
    }
  },
  computed: {
    doneTasks() {
      return this.$store.getters.doneTasks;
    }
  }
}
</script>

<template>
  <PageDefault :navbar-title="$t('tabs.DONE')">
    <TodoList :todos="doneTasks" @todoUpdate="onTodoUpdate" @todoRemove="onTodoRemove"></TodoList>
  </PageDefault>
</template>

<style>

</style>