const express = require('express');
const {registerUser,authUser} = require("../controllers/Con_Controller");
const{addtocart}=require('../controllers/cart_controllers')   
const router = express.Router();
console.log(`registerUser${registerUser}`)
router.post('/',registerUser);
router.post('/login',authUser)
router.post('/cart',addtocart)
module.exports = router