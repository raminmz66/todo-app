<template>
  <f7-list :sortable="sortable" :sortable-enabled="sortable" @sortable:sort="onSort" :class="`search-list-${pageKey}`"
    :virtual-list="isVirtual"
    :virtual-list-params="{
      items: todos,
      renderExternal,
      height: 71.59,
    }">
    <ToDoListItem v-for="todo in items" :key="todo.id" :todo="todo" @update="onTodoUpdate" @remove="onTodoRemove" :style="`top: ${vlData.topPosition}px`"></ToDoListItem>
  </f7-list>
</template>

<script>
import ToDoListItem from './ToDoListItem.vue';
export default {
  inject: ['pageKey'],
  data() {
    return {
      vlData: {
        items: [],
      },
    }
  },
  props: {
    todos: Array,
    sortable: {
      type: Boolean,
      default: false
    },
    isVirtual: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items() {
        return this.isVirtual ? this.vlData.items : this.todos;
    }
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
      this.$store.dispatch('move', { from: e.from, to: e.to })
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },
  }
}
</script>

<style>
    :root {
        --f7-list-item-header-text-color: #a7a7a7;
    }
</style>