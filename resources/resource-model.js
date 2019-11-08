const db = require('../data/db-config');

module.exports = {
  find,
  add
}

function find() {
  return db('resources');
}

function add(resourceData) {
  return db('resources')
    .insert(resourceData);
}
