const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  active: Boolean,
});

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;
