const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findTasks,
  add,
  addTask
}

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects as p')
    .where({ 'p.id': id });
}

function findTasks(id) {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 'p.name', 'p.description', 't.completed', 't.description',)
    .orderBy('t.id')
    .where({ 'p.id': id});
}


function add(projectData) {
  return db('projects')
    .insert(projectData);
}

function addTask(taskData, id) {
  return db('tasks as t')
  .join('projects as p', 't.id', 'p.id')
  .insert(taskData)
  .where({ 'p.id': id })
}


