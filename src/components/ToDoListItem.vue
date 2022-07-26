<template>
    <f7-list-item v-if="editMode" :checked="todo.done" :key="`${todo.id}`">
        <f7-input :name="`textarea-${todo.id}`" type="textarea" v-model:value="todo.text" resizable></f7-input>
        <f7-segmented>
            <f7-button active @click="onUpdate()">Save</f7-button>
            <f7-button outline @click="onEditCancel">Cancel</f7-button>
        </f7-segmented>
    </f7-list-item>
    <f7-list-item v-else :class="todo.done ? 'done' : ''" :checked="todo.done" :key="todo.id" @change="onChange" :title="todo.text" :checkbox="selectableItems">
        <template #header>
            <Timeago :datetime="timeAgoDateTime">
                <template #default="{ timeago }">
                    {{ (this.todo.done ? 'Updated ' : 'Created ') + timeago }}
                </template>
            </Timeago>
        </template>
        <template #after>
            <f7-link :actions-open="`#todo-actions-${todo.id}`" icon-ios="f7:ellipsis_vertical" icon-aurora="f7:ellipsis_vertical" icon-md="f7:ellipsis_vertical"></f7-link>
        </template>
    </f7-list-item>
    <f7-actions :id="`todo-actions-${todo.id}`">
        <f7-actions-group>
            <f7-actions-button v-if="todo.done && undonableItems" @click="onUndone">Undone</f7-actions-button>
            <f7-actions-button v-if="editableItems" @click="onEdit">Edit</f7-actions-button>
            <f7-actions-button color="red" @click="onRemove()">Remove</f7-actions-button>
        </f7-actions-group>
        <f7-actions-group>
            <f7-actions-button close color="gray">Cancel</f7-actions-button>
        </f7-actions-group>
    </f7-actions>
</template>

<script>
import { Timeago } from 'vue2-timeago';
import { focus } from '../utils/utils';

export default {   
    inject: {
        selectableItems: {
            from: 'selectableItems',
            default: true
        },
        editableItems: {
            from: 'editableItems',
            default: true
        },
        undonableItems: {
            from: 'undonableItems',
            default: false
        }
    },
    props: {
        todo: Object
    },
    components: {
        Timeago
    },
    data() {
        return {
            editMode: false,
            oldText: this.todo.text,
        }
    },
    computed: {
        timeAgoDateTime() {
            return this.todo.done ? this.todo.updatedTime : this.todo.createdTime;
        },
    },
    methods: {
        onChange(e) {
            this.todo.done = e.target.checked;
            this.$emit("update", { id: this.todo.id, done: this.todo.done ? 1 : 0 });
        },
        onRemove() {
            this.$emit("remove", { id: this.todo.id });
        },
        onEditCancel() {
            this.todo.text = this.oldText;
            this.editMode = false;
        },
        onEdit() {
            this.editMode = true;
            focus(`[name=textarea-${this.todo.id}]`);
        },
        onUpdate() {
            if (this.todo.text.trim()) {
                this.editMode = false;
                this.$emit("update", { id: this.todo.id, text: this.todo.text.trim() });
                this.oldText = this.todo.text.trim();
            }
        },
        onUndone() {
            if (this.todo.done) {
                this.$emit("update", { id: this.todo.id, done: 0 });
            }
        }
    },
}
</script>

<style scoped>
    .done ::v-deep(.item-title) {
        text-decoration: line-through;
        color: gray;
        font-style: italic;
        font-weight: 400;
    }
    .done ::v-deep(.item-content) {
        background: #efefef;
    }
    li ::v-deep(.item-inner .input) {
        flex-grow: 1;
        padding: 0 10px;
        margin-right: 10px;
        border: 1px solid lightgray;
        border-radius: 8px;
    }
    li ::v-deep(.item-title) {
        white-space: pre-line;
    }
</style>