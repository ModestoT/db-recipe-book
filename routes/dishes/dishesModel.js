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
    return db('dishes')
        .where({ id })
        .first();
}