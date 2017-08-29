var router = require('express').Router();
var users = require('users');
var products = require('products');


router.use('/users', users);
router.use('/products', products);

