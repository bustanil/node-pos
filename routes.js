var ProductController = require('./product/controller');

module.exports = function(app){
    app.get('/products', ProductController.findAll);
}