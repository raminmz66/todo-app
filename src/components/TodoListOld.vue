<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        todos: Array
    }
}
</script>

<style>
    
</style>