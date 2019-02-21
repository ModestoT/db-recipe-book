
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cup of milk', quanity: 1.5 },
        {id: 2, name: 'slice of bread', quanity: 3 },
        {id: 3, name: 'granny', quanity: 1 },
        {id: 4, name: 'Pepperoni', quanity: 100 },
        {id: 5, name: 'Chocolate Chips', quanity: 100 },
        {id: 6, name: 'slabs of peanut butter', quanity: 10 },
        {id: 7, name: 'Meatballs', quanity: 10.5 },
      ]);
    });
};
