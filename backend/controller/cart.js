const Cart = require("../model/cart");
const product = require("../model/product");
const user = require("../model/user");

module.exports.getCartByUserId = (req, res) => {
  const userId = req.params.userid;
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  Cart.find({
    userId,
  })
    .limit(limit)
    .sort({ createdAt: sort })
    .then(async (carts) => {
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
                _id,
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
      const rs = productRs.flatMap((item) =>
        item.status == "rejected" ? [] : item.value
      );
      res.json(rs);
    })
    .catch((err) => {
      res.json([]);
    });
};

module.exports.addProductIntoCart = async (req, res) => {
  try {
    const { userId, productId, quantity = 1,...rest } = req.body;

    if (!userId) {
      return res.status(403).json({
        status: "error",
        message: "Please login!",

      });
    }

    const existingUser = await user.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User is not found",
      });
    }
    const existingProduct = await product.findOne({ _id: productId });
    if (!existingProduct) {
      return res.status(404).json({
        status: "error",
        message: "Product is not found",
      });
    }

    const existingCart = await Cart.findOne({ userId, productId });

    if (existingCart) {
      existingCart.quantity = existingCart.quantity + quantity;
      existingCart.save();
      return res.status(200).json({
        status: "success",
        message: "Update Cart successfully",
        data: existingCart,
      });
    }

    const newCart = new Cart({
      userId,
      productId,
      quantity,
      ...rest,
    });
    const savedCart = await newCart.save();

    return res.status(201).json({
      status: "success",
      message: "Cart successfully added.",
      data: savedCart,
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

module.exports.deleteCartByUserId = async (req, res) => {
  try {
    const userId = req.params.userid;

    if (!userId) {
      return res
        .status(400)
        .json({ status: "error", message: "User ID required" });
    }

    const result = await Cart.deleteMany({ userId });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No cart items found to delete" });
    }

    res.status(200).json({
      status: "success",
      message: "Cart deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to delete cart" });
  }
};

module.exports.deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;

    if (!cartId) {
      return res
        .status(400)
        .json({ status: "error", message: "Cart ID required" });
    }

    Cart.findOneAndDelete({
      _id: req.params.id,
    })
      .then((cart) => {
        res.json(cart);
      })
      .catch((err) => {
        console.log("?");

        return res
          .status(404)
          .json({ status: "error", message: "Cart is not found" });
      });
  } catch (error) {
    console.log("?");

    res.status(500).json({ status: "error", message: "Failed to delete cart" });
  }
};
