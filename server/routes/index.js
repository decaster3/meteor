var router = require('express').Router();
var path = require('path');

require(path.join(__dirname, './', 'users'))(router);
require(path.join(__dirname, './', 'users'))(router);
require(path.join(__dirname, './', 'auth'))(router);

module.exports = router;
