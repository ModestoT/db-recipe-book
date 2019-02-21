const express = require('express');

const Dishes = require('./dishesModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes(req.query);
        res.status(200).json(dishes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'The Dishes information could not be retrieved' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.getDish(req.params.id);

        if(dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ error: 'That Dish id does not exist' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'The Dish information could not be retrieved' });
    }
})
module.exports = router;