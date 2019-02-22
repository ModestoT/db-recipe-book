const db = require('../../db/dbconfig.js');

module.exports = {
    getRecipes,
    addRecipe
}
function getRecipes() {
    return db('recipes')
        .join('dishes', 'dishes.id', 'recipes.dishId')
        .select('recipes.id', 'recipes.name', 'dishes.name as dish', 'recipes.instructions');
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe);
}