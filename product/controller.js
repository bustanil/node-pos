var Product = require('./model');

module.exports = {
    findAll : function(req, resp){
        Product.fetchAll().then(function (products) {
            resp.send(products.toJSON());
        });
    }
}