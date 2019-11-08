
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'money', description: 'what I dont have'},
        {name: 'lawyer', description: 'expensive'},
        {name: 'boxes', description: 'to move house'},
        {name: 'roof mannie', description: 'guy who fixes my roof'},
        {name: 'slates', description: 'replace old slates'},
        {name: 'rake'},
        {name: 'garden bin', description: 'somewhere to put garden waste'},
        {name: 'plastic bags'},

      ]);
    });
};
