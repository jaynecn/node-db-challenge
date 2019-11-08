
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'save a tonne of money', notes: 'its hard going, no fancy clothes for you', project_id: '1', completed: true},
        {description: 'upgrade the windows', notes: 'our windows are over 30 years old', project_id: '2', completed: false},
        {description: 'put laminate down', notes: 'the one in the hall makes the house look like a doctors reception area', project_id: '2', completed: false},
        {description: 'rake up leaves', project_id: '3', completed: false},
        {description: 'feed the birds', notes: 'its getting cold outside', project_id: '3', completed: false},
        {description: 'look through wardrobe', project_id: '4', completed: true},
        {description: 'put old clothes in a bag', project_id: '4', completed: true},
        {description: 'give to charity shop', project_id: '4', completed: false},
      ]);
    });
};
