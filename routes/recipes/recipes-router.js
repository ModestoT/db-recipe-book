const express = require('express');

const Recipes = require('./recipesModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes(req.query);
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'The Recipes could not be retrieved' });
    }
});

router.post('/', async (req, res) => {
    if(!req.body.name || !req.body.dishId || !req.body.instructions){
        res.status(400).json({ error: 'The Recipe is missing its name, dishId or instructions. Please add them.' });
    } else {
        try {
            const recipe = await Recipes.addRecipe(req.body);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
            json.status(500).json({ error: 'Could not add the Recipe to the database' });
        }
    }
})
module.exports = router;