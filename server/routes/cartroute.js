const express= require('express')
const { addToCart } = require('../controllers/cart_controllers')
const router= express.Router()
router.post('/cart',addToCart)
module.exports=router