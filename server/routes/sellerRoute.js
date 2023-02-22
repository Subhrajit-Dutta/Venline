const express = require('express');
const router = express.Router();
const {createSeller} = require('../controllers/seller_controller');

// Create a new seller
router.post('/sellerlogin', createSeller);

module.exports = router;
