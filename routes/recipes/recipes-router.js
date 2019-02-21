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
})
module.exports = router;