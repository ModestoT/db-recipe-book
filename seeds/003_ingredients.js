
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cup of milk', quanity: 1.5 },
        { name: 'slice of bread', quanity: 3 },
        { name: 'granny', quanity: 1 },
        { name: 'Pepperoni', quanity: 100 },
        { name: 'Chocolate Chips', quanity: 100 },
        { name: 'slabs of peanut butter', quanity: 10 },
        { name: 'Meatballs', quanity: 10.5 },
      ]);
    });
};
