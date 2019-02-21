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

}

function getDish(id) {

}