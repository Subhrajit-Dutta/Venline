const express = require('express');
const {registerUser,authUser} = require("../controllers/Con_Controller");
const{getProducts,getProductById}=require('../controllers/product_controller')
const{addToCart}=require('../controllers/cart_controllers')   
const router = express.Router();
console.log(`registerUser${registerUser}`)
router.post('/',registerUser);
router.post('/login',authUser)
router.post('/cart',addToCart)
router.post('/product',getProducts)
router.post('/search',getProductById)
module.exports = router