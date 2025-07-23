const Cart = require("../model/cart");

module.exports.getAllCarts = (req, res) => {
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;
  const startDate = req.query.startdate || new Date("1970-1-1");
  const endDate = req.query.enddate || new Date();

  console.log(startDate, endDate);

  Cart.find({
    date: { $gte: new Date(startDate), $lt: new Date(endDate) },
  })
    .limit(limit)
    .sort({ createdAt: sort })
    .then((carts) => {
      res.json(carts);
    })
    .catch((err) => console.log(err));
};

module.exports.getCartsbyUserid = (req, res) => {
  const userId = req.params.userid;
  const startDate = req.query.startdate || new Date("1970-1-1");
  const endDate = req.query.enddate || new Date();

  console.log(startDate, endDate);
  Cart.find({
    userId,
  })
    .then((carts) => {
      res.json(carts);
    })
    .catch((err) => console.log(err));
};

module.exports.getSingleCart = (req, res) => {
  const id = req.params.id;
  Cart.findOne({
    id,
  })
    .select("-_id -products._id")
    .then((cart) => res.json(cart))
    .catch((err) => console.log(err));
};

module.exports.addCart = async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!userId || !Array.isArray(products)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid required fields (userId or products).",
      });
    }

    const existingCart = await Cart.findOne({ userId });

    let savedCart;
    if (existingCart) {
      // Update existing cart (replace products, or you can merge logic here)
      existingCart.products = products;
      existingCart.date = new Date();
      savedCart = await existingCart.save();
    } else {
      const newCart = new Cart({
        id,
        userId,
        products,
        date: new Date(), // or you can allow date to come from req.body
      });

      savedCart = await newCart.save();
    }

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

module.exports.editCart = async (req, res) => {
  try {
    const userId = req.params.id; // assumes PUT /cart/:id
    const { id: productId, quantity } = req.body;

    if (!userId || !productId || typeof quantity !== "number") {
      return res.status(400).json({
        status: "error",
        message: "Missing userId, productId, or quantity.",
      });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res
        .status(404)
        .json({ status: "error", message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex === -1) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not in cart" });
    }

    cart.products[productIndex].quantity = quantity;
    cart.date = new Date();

    const updatedCart = await cart.save();

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

module.exports.deleteCart = async (req, res) => {
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
    console.error("Error deleting cart:", error.message);
    res.status(500).json({ status: "error", message: "Failed to delete cart" });
  }
};
