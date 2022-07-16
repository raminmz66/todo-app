<template>
    <f7-list-item :class="todo.done ? 'done' : ''" :checked="todo.done" :key="todo.id" @change="onChange" header="3 days a go" :title="todo.text" checkbox>
        <template #after>
            <f7-link icon-color="gray" icon-ios="f7:ellipsis_vertical" icon-aurora="f7:ellipsis_vertical" icon-md="f7:ellipsis_vertical"></f7-link>
        </template>
    </f7-list-item>
</template>

<script>
export default {
    props: {
        todo: Object
    },
    methods: {
        onChange(e) {
            this.todo.done = e.target.checked;
            this.$emit("update", { id: this.todo.id, done: this.todo.done });
        }
    },
}
</script>

<style scoped>
    .done ::v-deep(.item-title) {
        text-decoration: line-through;
        color: gray;
        font-style: italic;
    }
    .done ::v-deep(.item-content) {
        background: #efefef;
    }
</style>