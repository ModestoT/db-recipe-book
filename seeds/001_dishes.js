
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Tacos'},
        {id: 3, name: 'Pasta'},
        {id: 4, name: 'Cookies'}
      ]);
    });
};
