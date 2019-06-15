var mongoose = require("mongoose");

const User = mongoose.model("Test", {
  _id: String,
  username: String,
  email: String,
  password: String,
  hasProject: Boolean,
  image: Boolean
});

module.exports = User;
