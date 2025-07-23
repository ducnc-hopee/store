const Cart = require("../model/cart");
const Order = require("../model/order");
const product = require("../model/product");

module.exports.getOrdersByUserId = (req, res) => {
  const userId = req.params.id;
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;
  console.log(userId);

  Order.find({
    userId,
  })
    .limit(limit)
    .sort({ createdAt: sort })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.json([]);
    });
};

module.exports.createOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const carts = await Cart.find({
      userId,
    });
    const productRs = await Promise.allSettled(
      carts.map(
        async ({
          productId,
          userId,
          _id,
          quantity,
          $__,
          isNew,
          $locals,
          $op,
          _doc,
          $init,
          ...rest
        }) => {
          try {
            const p = await product.findOne({ _id: productId });
            return {
              userId,
              quantity,
              product: p,
              ...rest,
            };
          } catch (error) {
            throw new Error("Product Not found");
          }
        }
      )
    );
    const items = productRs.flatMap((item) =>
      item.status == "rejected" ? [] : item.value
    );

    if (items.length === 0) {
      res.status(400).json({
        status: "error",
        message: "items is empty",
        error: error.message,
      });
    }

    const rs = new Order({
      userId,
      items,
      createAt: new Date().toISOString(),
    });
    await rs.save();
    try {
      await Cart.deleteMany({ userId });
    } catch {
      await Order.findOneAndDelete({
        _id: rs.id,
      });
      throw new Error();
    }

    return res.status(200).json({
      status: "error",
      message: "Create order successfully",
    });
  } catch (error) {
    console.error("Error saving cart:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Failed to save cart.",
      error: error.message,
    });
  }
};

module.exports.editCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const existCart = await Cart.findOne({ _id: req.params.id });
    if (!existCart) {
      return res
        .status(404)
        .json({ status: "error", message: "Cart not found" });
    }

    if (typeof quantity !== "number") {
      return res.status(400).json({
        status: "error",
        message: "Missing quantity.",
      });
    }

    if (quantity < 1) {
      return res.status(400).json({
        status: "error",
        message: "quantity is larger than 0",
      });
    }

    existCart.quantity = quantity;

    const updatedCart = await existCart.save();

    res.status(200).json({
      status: "success",
      message: "Cart updated successfully.",
      data: updatedCart,
    });
  } catch (error) {
    console.error("Error editing cart:", error.message);
    res
      .status(500)
      .json({ status: "error", message: "Failed to update cart." });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    if (!orderId) {
      return res
        .status(400)
        .json({ status: "error", message: "orderId required" });
    }

    Order.findOneAndDelete({
      _id: req.params.id,
    })
      .then((order) => {
        res.json(order);
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ status: "error", message: "order is not found" });
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Failed to delete order" });
  }
};
