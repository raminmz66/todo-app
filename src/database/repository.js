import { db } from './indexedDB';

const repository = {
    async tasks() {
        return await db.todos.orderBy('sequence').reverse().toArray();
    },
    async addTask(task) {
        const next = await this.increaseTodosSeq();
        const newTask = {...task, sequence: next};
        await db.todos.add(newTask);
        Object.assign(task, newTask);
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
        return await db.settings.toCollection().first()
    },
    async todosSeq() {
        const item = await db.todosSeq.toCollection().first();
        if (item) {
            return item.sequence;
        }
        return 0;
    },
    async increaseTodosSeq() {
        const current = await this.todosSeq();
        await db.todosSeq.put({ id: 1, sequence: current+1 });
        return current+1;
    },
    async swap(firstId, secondId) {
        const firstTask = await db.todos.get(firstId);
        const secondTask = await db.todos.get(secondId);
        const firstUpdated = {...firstTask, sequence: secondTask.sequence};
        const secondUpdated = {...secondTask, sequence: firstTask.sequence};
        await db.todos.put(firstUpdated);
        await db.todos.put(secondUpdated);
    }
}

export default repository;