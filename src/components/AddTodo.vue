<template>
    <form>
        <input @keydown.enter="onEnter" ref="input" type="text" placeholder="Write..." v-model="text" />
        <button type="button" @click="onAdd">Add</button>
    </form>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onAdd() {
            this.$emit("add", { text: this.text });
            this.text = "";
            this.$refs.input.focus();
        },
        onEnter(e) {
            e.preventDefault();
            this.onAdd();
        }
    }
}
</script>

<style scoped>
    
</style>