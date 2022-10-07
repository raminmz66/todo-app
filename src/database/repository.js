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
    },
    async setLocale(locale) {
        await db.settings.put({ id: 1, language: locale });
    },
    async loadSettings() {
        const settings = await db.settings.toArray();
        return settings[0];
    }
}

export default repository;