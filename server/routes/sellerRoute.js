const express = require('express');
const router = express.Router();
const {createSeller,authseller} = require('../controllers/seller_controller');
const{ createProduct}=require('../controllers/product_controller')

// Create a new seller
router.post('/seller', createSeller);
router.post('/seller/login', authseller);
router.post('/seller/upload', createProduct);

module.exports = router;
