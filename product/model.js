var bookshelf = require('../db');

var Product = bookshelf.Model.extend({
    tableName: 'product'
});

module.exports = Product;