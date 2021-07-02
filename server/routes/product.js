const express = require("express");

const router = express.Router();

// middleware
const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, listAll } = require("../controllers/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);

module.exports = router;
