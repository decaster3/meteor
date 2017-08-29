var users = require('express').Router();

var orders = require('./orders');
var profile = require('./profile');

user.use(function(req, res, next){
	if (req.auth) {
		next();
	} else {
		res.end({result: "error", error: "Authenticate before action"});
	}
});

users.param('userId', function(req, res, next, userId) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + userId);

    // once validation is done save the new item in the req
    req.userId = userId;
    // go to the next thing
    next();
});

users.get('/:userId', function(req, res, next){

});



users.post('/:userId/newReferral', function(req, res, next){

});

users.use('/:userId/profile', profile);

users.use('/:userId/info', orders);