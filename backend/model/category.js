const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema(
  {
    name: {
      type: String,
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
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("category", categorySchema);
