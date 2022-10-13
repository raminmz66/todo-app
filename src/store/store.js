import { createStore } from 'vuex';
import repository from '../database/repository';

export default createStore({
    state() {
        return {
            tasks: [],
            locale: 'en'
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.unshift(task);
        },
        updateTask(state, task) {
            const index = state.tasks.findIndex(t => t.id == task.id);
            if (index >= 0) {
                state.tasks[index] = {...state.tasks[index],...task};
            }
        },
        removeTask(state, id) {
            const index = state.tasks.findIndex(t => t.id == id);
            if (index >= 0) {
                state.tasks.splice(index,1);
            }
        },
        setLocale(state, locale) {
            state.locale = locale;
        }
    },
    getters: {
        todoTasks: state => {
            const todayStart = new Date();
            const todayEnd = new Date();
            todayStart.setHours(0,0,0,0);
            todayEnd.setHours(23,59,59,999);
            return state.tasks
                .filter(task => task.done == 0 || (task.updatedTime >= todayStart && task.updatedTime <= todayEnd))
                .sort((taskA, taskB) => taskB.sequence - taskA.sequence);
        },
        doneTasks: state => {
          return state.tasks
            .filter(task => task.done == 1)
            .sort((taskA, taskB) => {
                if (taskA.updatedTime < taskB.updatedTime) {
                    return 1;
                }
                if (taskA.updatedTime > taskB.updatedTime) {
                    return -1;
                }
                return 0;
            });
        },
        locale: state => state.locale
    },
    actions: {
        async fetchTasks({ commit }) {
            const tasks = await repository.tasks();
            commit('setTasks', tasks);
        },
        async addTask({ commit }, task) {
            await repository.addTask(task);
            commit('addTask', task);
        },
        async updateTask({ commit }, task) {
            await repository.updateTask(task);
            commit('updateTask', task);
        },
        async removeTask({ commit }, id) {
            await repository.removeTask(id);
            commit('removeTask', id);
        },
        async setLocale({ commit }, locale) {
            await repository.setLocale(locale);
            commit('setLocale', locale);
        },
        async fetchLocale({ commit }) {
            const settings = await repository.loadSettings();
            commit('setLocale', settings.language);
        },
        async swap({ commit, getters }, payload) {
            const first = getters.todoTasks[payload.first];
            const second = getters.todoTasks[payload.second];
            const firstSeq = first.sequence;
            first.sequence = second.sequence;
            second.sequence = firstSeq;
            await repository.swap(first.id, second.id);
        }
    }
});
