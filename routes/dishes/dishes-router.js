const express = require('express');

const Dishes = require('./dishesModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes(req.query);
        res.status(200).json(dishes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'The Dishes could not be retrieved' });
    }
})
module.exports = router;