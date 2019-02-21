
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredientsForRecipe')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsForRecipe').insert([
        {recipeId: 1, ingredientId: 1 },
        {recipeId: 5, ingredientId: 5 },
        {recipeId: 3, ingredientId: 3 },
        {recipeId: 4, ingredientId: 4 },
        {recipeId: 2, ingredientId: 1 },
        {recipeId: 6, ingredientId: 7 },
        {recipeId: 3, ingredientId: 2 },
        {recipeId: 7, ingredientId: 6 }
      ]);
    });
};
