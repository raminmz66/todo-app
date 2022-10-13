import Dexie from 'dexie';

export const db = new Dexie('database');

db.version(1).stores({
  todos: '++id, text, done, createdTime, updatedTime',
});

db.version(2).stores({
  todos: '++id, text, done, createdTime, updatedTime',
  settings: 'language'
});

db.version(3).stores({
  todos: '++id, text, done, createdTime, updatedTime',
  settings: null,
  settings2: 'id, language'
});

db.version(4).stores({
  todos: '++id, text, done, createdTime, updatedTime',
  settings2: null,
  settings: 'id, language'
});

db.on("populate", trans => {
  trans.settings.add({ id: 1, language: 'en' });
});

db.version(5).stores({
  todos: '++id, text, done, createdTime, updatedTime, sequence',
  todosSeq: 'id, sequence'
}).upgrade(async trans => {
  let sequence = 1;
  await trans.todos.toCollection().modify(todo => {
    todo.sequence = sequence++; 
  });
  await trans.todosSeq.put({ id: 1, sequence: await trans.todos.toCollection().count() });
});