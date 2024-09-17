const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const { Blogs } = require("./Modals/db.js");
const router = require("./Routers/routes.js");
const app = express();
const port = 7000;

mongoose.connect(
  "mongodb+srv://shivampanseja:1234@cluster0.dmdpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

mongoose.connection.on("connected", () => console.log("database connected"));

app.use(express.json());
app.use("/", router);

// get request
console.log("insiude tjis req");

app.listen(port);
