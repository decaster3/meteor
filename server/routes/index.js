var router = require('express').Router();
var users = require('./users');
var products = require('./products');
var database = require('firebase')


router.use('/users', users);
router.use('/products', products);

module.exports = router;
