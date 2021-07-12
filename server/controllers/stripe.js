const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  // apply coupon
  // calculate price

  // find user
  const user = await User.findOne({ email: req.user.email }).exec();
  // get user cart total
  const { cartTotal } = await Cart.findOne({ orderedBy: user._id }).exec();

  console.log("CART TOTAL CHARGED", cartTotal);
  //create payment intent with order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: cartTotal * 100,
    currency: "cad",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
