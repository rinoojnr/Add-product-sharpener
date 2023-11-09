const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsController = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', productsController.getProduct);

// /admin/add-product => POST
router.post('/add-product',productsController.addProduct);

exports.routes = router;

