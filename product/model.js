var bookshelf = require('../db/bookshelf')

var Product = bookshelf.Model.extend({
  tableName: 'product'
})

module.exports = Product
