
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'buy house', description: 'cute wee house in Torry', completed: true},
        {name: 'fix house', description: 'make the house pretty', completed: false},
        {name: 'tidy garden', description: 'cute wee house in Torry', completed: false},
        {name: 'sort out clothes', description: 'give old clothes to charity shop', completed: false},
      ]);
    });
};
