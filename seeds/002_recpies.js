
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Five Cheese Pizza', dishId: 1, instructions: 'Put five cheeses on the pizza'},
        {id: 2, name: 'Tacos with rice', dishId: 2, instructions: 'Add some rice with the tacos from taco bell'},
        {id: 3, name: 'Grannys Tacos', dishId: 2, instructions: 'Ask your grandma to make you some tacos'},
        {id: 4, name: 'Pepperoni Pizza', dishId: 1, instructions: 'Call your nearest pizza place'},
        {id: 5, name: 'Chocolate Cookies', dishId: 4, instructions: 'Put a lot of chocolate chips on the cookie dough'},
        {id: 6, name: 'Peanut Butter Cookies', dishId: 4, instructions: 'Dont let the dog get them'},
        {id: 7, name: 'Pasta and Meatballs', dishId: 3, instructions: 'Go to italy'},
      ]);
    });
};
