var dbConfig = {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'password',
      database : 'pos',
      charset  : 'utf8'
    }
  }

var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);