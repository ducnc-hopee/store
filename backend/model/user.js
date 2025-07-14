const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("user", userSchema);
