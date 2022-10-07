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
