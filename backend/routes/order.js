const express = require("express");
const router = express.Router();
const order = require("../controller/order");

router.get("/get-by-user/:id", order.getOrdersByUserId);
router.post("/create", order.createOrder);
router.delete("/:id", order.deleteOrder);

module.exports = router;
