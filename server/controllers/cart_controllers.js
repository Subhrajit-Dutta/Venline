const asyncHandler= require('express-async-handler');
const User=require("../models/ConsumerModel");
const Cart= require("../models/cartmodel");
const Product=require("../models/productmodel");
const addtocart=asyncHandler(async(req,res)=>{
  const{user,items}=req.body
  const userid= User.findById(user)
  if(userid){
    console.log("user found",user.username)
    let cartModel = await Cart.findOne({});
    const product= Product.findById(items.productId)
    console.log(items.productId)
    if(product){
      cartModel.items.push({
        productId:product._id,
        quantity:items.quantity,
        price:price*quantity
      })
    }
    else{
      res.status(400)
      throw new Error("Product not found")
    }
  await cartModel.save()
  res.status(200).json({message:"Cart Updated"})
  }
});
module.exports={addtocart};
exports.addtocart=addtocart