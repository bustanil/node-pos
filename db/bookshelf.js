var dbConfig = require('../config').db

var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);