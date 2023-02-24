const asyncHandler= require('express-async-handler');
const User=require("../models/ConsumerModel");
const Cart= require("../models/cartmodel");
const Product=require("../models/productmodel");

const addToCart = asyncHandler(async(req,res) => {
  const { user, items } = req.body;
  let userExists = await User.findOne({ _id: user });
  if(userExists){
       
  }

  if (!cartModel) {
    cartModel = new Cart({ user: userId, items: [] });
  }

  const cartItem = cartModel.items.find(item => item.productId.toString() === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
    cartItem.price += quantity * cartItem.price;
  } else {
    const product = await Product.findOne({ _id: productId });

    if (product) {
      cartModel.items.push({
        productId: product._id,
        quantity,
        price: product.price
      });
    } else {
      res.status(400);
      throw new Error("Product not found");
    }
  }

  await cartModel.save();

  res.status(200).json({ message: "Cart Updated" });
});

module.exports = { addToCart };
exports.addToCart = addToCart;
