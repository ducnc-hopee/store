const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
     selectedColor: {
      type: String,
      default: null, // or required: true if you want to force it
    },

  },
  { strict: false }
);

module.exports = mongoose.model("cart", cartSchema);
