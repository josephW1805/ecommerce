const express = require("express");

const router = express.Router();

// middleware
const { authCheck } = require("../middleware/auth");
// controller
const { userCart } = require("../controllers/user");

router.post("/cart", authCheck, userCart); // save cart

module.exports = router;
