const asyncHandler = require('express-async-handler');
const Seller = require('../models/SellerModel');

// Create a new seller
const createSeller = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const seller = new Seller({
    name,
    email,
    password
  });

  const createdSeller = await seller.save();

  res.status(201).json(createdSeller);
});

module.exports = { createSeller };
exports.createSeller=createSeller