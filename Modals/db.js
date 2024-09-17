const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Blog_Title: String,
  Blog_Post: String,
});

const Blogs = model("Blogs", userSchema);
module.exports = { Blogs };
