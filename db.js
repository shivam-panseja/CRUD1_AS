const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  State: String,
});

const Users = model("Users", userSchema);
module.exports = { Users };
