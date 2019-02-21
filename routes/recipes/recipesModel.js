const db = require('../../db/dbconfig.js');

module.exports = {
    getRecipes,
    addRecipe
}
function getRecipes() {
    return db('recipes');
}

function addRecipe(recipe) {

}