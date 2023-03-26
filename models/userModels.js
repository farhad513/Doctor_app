const mongoose = require("mongoose");

const userModels = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be Required"],
  },
  email: {
    type: String,
    required: [true, "Email must be Required"],
  },
  password: {
    type: String,
    required: [true, "Password must be Required"],
  },
});

module.exports = mongoose.model("User", userModels);
