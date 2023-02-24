const asyncHandler = require('express-async-handler');
const Seller = require('../models/SellerModel');

// Create a new seller
const createSeller = asyncHandler(async (req, res) => {
  const { name, email, password,} = req.body;

  const seller = new Seller({
    name,
    email,
    password,
  });

  const createdSeller = await seller.save();

  res.status(201).json(createdSeller);
});
 const authseller = asyncHandler(async (req, res) => {  
   const { email, password } = req.body;
   const seller = await Seller.findOne({ email });
   if (seller && (await seller.matchPassword(password))) {
     res.json({
       _id: seller._id,
       name: seller.name,
       email: seller.email,
     });
   } else {
     res.status(401);
     throw new Error('Invalid email or password');
   }
 });

module.exports = { createSeller,authseller };
exports.createSeller=createSeller
exports.authseller=authseller