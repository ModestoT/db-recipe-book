
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('dishes', dish => {
            dish.increments();
            dish.string('name', 100).notNullable();
        })
        .createTable('recipes', recipe => {
            recipe.increments();
            recipe.string('name', 100).notNullable().unique();

            recipe
                .interger('dishId')
                .unsigned()
                .references('id')
                .inTable('dishes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            
            recipe.string('instructions', 300).notNullable();
        })
        .createTable('ingredients', ingredient => {
            ingredient.increments();
            ingredient.string('name', 100).notNullable();
            ingredient.float('quanity');
        })
        .createTable('ingredientsForRecipe', ifr => {
            ifr
                .interger('recipeId')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            
            ifr
                .interger('ingredientId')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            ifr.unique(['recipeId', 'ingredientId']);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes').dropTableIfExists('recipes').dropTableIfExists('ingredients').dropTableIfExists('ingredientsForRecipe');
};
