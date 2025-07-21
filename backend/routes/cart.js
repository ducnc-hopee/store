const express = require("express");
const router = express.Router();
const cart = require("../controller/cart");

// Get all carts (with optional filtering)
router.get("/", cart.getAllCarts);

// More specific route first
router.get("/user/:userid", cart.getCartsbyUserid);

// Get single cart by ID
router.get("/:id", cart.getSingleCart);

// Add a new cart
router.post("/", cart.addCart);

// Update a cart (full or partial)
router.put("/:id", cart.editCart);
router.patch("/:id", cart.editCart);

// Delete a cart
router.delete("/:id", cart.deleteCart);

module.exports = router;
