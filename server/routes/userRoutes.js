const express = require('express');
const {registerUser}=require("../controllers/Con_Controller");
const router=express.Router();
console.log(`registerUser${registerUser}`)
router.post('/',registerUser);
//router.post('/login',authUser)
module.exports=router