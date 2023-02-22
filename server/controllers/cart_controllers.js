const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartmodel');
const Product = require('../models/productmodel');

// Add a product to the cart
  const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;
  
    const product = await Product.findOne({ _id: productId });
  
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }
  
    const cart = await Cart.findOne({ user: req.user._id });
  
    if (cart) {
      // If the cart exists, find the index of the item with the matching product ID
      const index = cart.items.findIndex(item => item.product._id.equals(productId));
  
      if (index !== -1) {
        // If the item already exists in the cart, update the quantity
        cart.items[index].quantity += quantity;
        cart.items[index].price = product.price * cart.items[index].quantity;
      } else {
        // If the item is new, add it to the cart
        cart.items.push({
          product: product._id,
          quantity: quantity,
          price: product.price * quantity
        });
      }
  
      cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);
  
      await cart.save();
      res.json(cart);
    } else {
      // If the cart doesn't exist, create a new one and add the item
      const newCart = await Cart.create({
        user: req.user._id,
        items: [
          {
            product: product._id,
            quantity: quantity,
            price: product.price * quantity
          }
        ],
        total: product.price * quantity
      });
  
      res.json(newCart);
    }
  });
module.exports = {addToCart}
exports.addToCart=addToCart