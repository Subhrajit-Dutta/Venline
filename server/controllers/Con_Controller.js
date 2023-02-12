const { request } = require("express")
const asyncHandler = require('express-async-handler');
const User=require("../models/ConsumerModel");
const generateToken=require("../config/generateToken");
const registerUser=asyncHandler( async (req,res)=>{
    const{username,email,password,phone}= req.body
    if (!username||!email||!password) {
        res.status(400);
        throw new Error("Please provide Error Field")
    }
    const userExists= await User.findOne({email});
    if (userExists) {
        res.status(400)
        throw new Error("User already Exists");
    }
    const user = User.create(
        {
            username,
            email,
            password,
            phone,
        }
    )
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            password:user.password,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Failed to register")
    }
    })
    module.exports = {registerUser}
    exports.registerUser = registerUser