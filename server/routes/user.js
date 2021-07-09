const express = require("express");

const router = express.Router();

// middleware
const { authCheck } = require("../middleware/auth");
// controllers
const { userCart, getUserCart } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart); // save cart
router.get("/user/cart", authCheck, getUserCart); // get cart

module.exports = router;
