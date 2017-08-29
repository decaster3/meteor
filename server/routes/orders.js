var router = require('express').Router({mergeParams: true});


// orders of particular user
router.get('/', function(req, res, next) {

});

// initiate new order 
router.post('/new', function(req, res, next) {
	
})


router.param('orderId', function(req, res, next, orderId) {

	if (orderId == )
	req.orderId = orderId;
	next();
});


// get information of particular order
router.get('/:orderId') {

}
