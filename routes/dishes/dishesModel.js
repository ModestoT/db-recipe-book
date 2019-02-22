const db = require('../../db/dbconfig.js');

module.exports = {
    getDishes,
    getDish,
    addDish,
};

function getDishes() {
    return db('dishes');
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
        .then(id => {
            return getDish(id[0]);
        });
}

function getDish(id) {
    const query = db('dishes').where({ id }).first();
    const promises = [query, getDishRecipes(id)];
    
    return Promise.all(promises).then( function(results){
        let dish = results[0];
        let recipes = results[1];
        dish.recipes = recipes;

        const result = {...dish};

        if(dish.recipes){
            result.recipes = dish.recipes.map(recipe => ({ ...recipe}));
        }

        return result;
    })
}

function getDishRecipes(id) {
    return db('recipes')
      .where('dishId', id)
      .then(recipes => recipes.map(recipe => {return {...recipe}}));
}