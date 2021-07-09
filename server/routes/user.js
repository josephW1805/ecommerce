const express = require("express");

const router = express.Router();

// middleware
const { authCheck } = require("../middleware/auth");
// controllers
const { useCart } = require("../controllers/user");

router.post("/cart", authCheck, userCart);

module.exports = router;
