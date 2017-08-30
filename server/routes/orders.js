var orders = require('express').Router({mergeParams: true});


// orders of particular user
orders.get('/', function(req, res, next) {

});

// initiate new order 
orders.post('/new', function(req, res, next) {
	
})


orders.param('orderId', function(req, res, next, orderId) {

	next();
});


// get information of particular order
orders.get('/:orderId', function(req, res, next) {

});


module.exports = orders;