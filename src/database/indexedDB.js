import Dexie from 'dexie';

export const db = new Dexie('database');

db.version(1).stores({
  todos: '++id, text, done, createdTime, updatedTime',
});

db.version(2).stores({
  todos: '++id, text, done, createdTime, updatedTime',
  settings: 'language'
});

db.settings.add({
  language: 'en'
});