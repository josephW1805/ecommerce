const express = require("express");

const router = express.Router();

// middleware
const { authCheck } = require("../middleware/auth");
// controllers
const { userCart } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart);

module.exports = router;
