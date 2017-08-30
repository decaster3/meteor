var products = require('express').Router({mergeParams: true});

products.get('/', function(req, res) {
	
});

products.param('productId', function(req, res, next, productId) {
	
	console.log('validation on productId: ' + productId);
	req.productId = productId;
	next();
});


products.get('/:productId', function(req, res, next) {
	res.send({product: productId});
});

products.get('/:productId', function(req, res, next) {
	res.send({product: productId});
});

module.exports = products;