const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  // apply coupon
  // calculate price

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "cad",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
