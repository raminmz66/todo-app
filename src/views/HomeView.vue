<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
export default {
    name: "HomeView",
    components: { AddTodo, TodoList },
    data() {
        return {
            items: []
        }
    },
    methods: {
        addNote(data) {
            this.items = [{ text: data.text }, ...this.items];
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