// Choose an enviroment setup from knexfile
// Get env vars
// Then require knex package, passing in the env config we just found

'use strict';

const environment = process.env.NODE_ENV || 'test';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
