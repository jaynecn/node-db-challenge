
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments()
      table.string('name', 128)
        .notNullable();
      table.string('description', 128)
      table.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('tasks', table => {
      table.increments()
      table.string('description', 128)
        .notNullable()
      table.string('notes', 128)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', table => {
      table.increments()
      table.string('name', 128)
        .unique()
        .notNullable()
      table.string('description', 128)
    })
    .createTable('resourcesInProjects', table => {
      table.increments()
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resourcesInProjects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
  
};
