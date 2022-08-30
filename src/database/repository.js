import { db } from './indexedDB';

const repository = {
    async tasks() {
        return await db.todos.toArray();
    },
    async addTask(task) {
        await db.todos.add(task);
    },
    async updateTask(task) {
        await db.todos.update(task.id, task);
    },
    async removeTask(id) {
        await db.todos.delete(id);
    }
}

export default repository;