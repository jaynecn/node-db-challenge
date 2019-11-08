const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findTasks
}

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects as p')
    .where({ 'p.id': id });
}

function findTasks(id) {
  return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')
    .select('t.id', 'p.name', 'p.description', 't.description')
    .orderBy('t.id')
    .where({ 'p.id': id});
}