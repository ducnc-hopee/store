const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema(
  {
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    colors: [String],
    brand: String,
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("product", productSchema);
