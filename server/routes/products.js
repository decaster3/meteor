var router = require('express').Router({mergeParams: true});

router.get('/', function(req, res) {
	
});

router.param('productId', function(req, res, next, productId) {
	
	console.log('validation on productId: ' + productId);
	req.productId = productId;
	next();
});


router.get('/:productId', function(req, res, next) {
	res.send({product: productId});
});

router.get('/:productId', function(req, res, next) {
	res.send({product: productId});
});

