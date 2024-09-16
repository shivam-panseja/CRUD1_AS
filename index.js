const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const { Users } = require("./db.js");

mongoose.connect(
  "mongodb+srv://shivampanseja:1234@cluster0.dmdpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

mongoose.connection.on("connected", () => console.log("database connected"));

const app = express();
const port = 4000;

app.use(express.json());

// get api
app.get("/", async (req, res) => {
  //   res.json(User);
  const allUsers = await Users.find();
  res.json({ msg: "all users list", data: allUsers });
});

// post api call
app.post("/users", async (req, res) => {
  const users = req.body;
  console.log("users", users);
  const newuser = await Users.create({
    name: users.name,
    email: users.email,
    phone: users.phone,
    city: users.city,
    state: users.state,
  });
  res.json(newuser);
});

// get by particular id call
app.get("/:Id", async (req, res) => {
  const id = req.params.Id;
  const findUser = await Users.findOne({ _id: id });
  res.json({ msg: "all users data", data: findUser });
});

app.patch("/:Id", async (req, res) => {
  const id = req.params.Id;
  console.log("value of id", id);
  const upatedversion = req.body;
  console.log("value of updatedVersion", upatedversion);
  const users = await Users.updateOne(
    { _id: id },
    { name: upatedversion.name, phone: upatedversion.phone }
  );
  res.json(users);
});

app.listen(port);
