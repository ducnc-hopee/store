const mongoose = require("mongoose");
const schema = mongoose.Schema;

const orderSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    items: {
      type: schema.Types.Mixed,
      required: true,
    },
    createAt: {
      type: String,
      required: true,
    },
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("order", orderSchema);
