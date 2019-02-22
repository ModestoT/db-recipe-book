
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Five Cheese Pizza', dishId: 1, instructions: 'Put five cheeses on the pizza'},
        {name: 'Tacos with rice', dishId: 2, instructions: 'Add some rice with the tacos from taco bell'},
        {name: 'Grannys Tacos', dishId: 2, instructions: 'Ask your grandma to make you some tacos'},
        {name: 'Pepperoni Pizza', dishId: 1, instructions: 'Call your nearest pizza place'},
        {name: 'Chocolate Cookies', dishId: 4, instructions: 'Put a lot of chocolate chips on the cookie dough'},
        {name: 'Peanut Butter Cookies', dishId: 4, instructions: 'Dont let the dog get them'},
        {name: 'Pasta and Meatballs', dishId: 3, instructions: 'Go to italy'},
      ]);
    });
};
