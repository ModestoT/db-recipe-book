const express = require('express'); 
const helmet = require('helmet');
const server = express();

const dishesRouter = require('./routes/dishes/dishes-router.js');
const recipesRouter = require('./routes/recipes/recipes-router.js');

server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;