const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  name: {
    type: "String",
    required: true,
  },
  age: {
      type: "Number",
      required: true,
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;