const express = require("express");
const router = express.Router();
const cart = require("../controller/cart");

router.get("/user/:userid", cart.getCartByUserId);
router.post("/", cart.addProductIntoCart);
router.put("/:id", cart.editCartQuantity);
router.patch("/:id", cart.editCartQuantity);
router.delete("/:id", cart.deleteCart);
router.delete("/user/:userid", cart.deleteCartByUserId);

module.exports = router;
