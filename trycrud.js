const express = require("express");
const mongoose = require("mongoose");

mongoose.connect =
  "mongodb+srv://shivampanseja:1234@cluster0.dmdpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connection.on("connected", () =>
  console.log("connected to the database")
);

const { User } = require("./db");
const app = express();

app.use(express.json());

const PORT = 4000;

// Get Term
app.get("/", async (req, res) => {
  const users = await user.find();
  res.json(users);
});

// Post Term

app.post("/user", async (req, res) => {
  const users = req.body;
  const newuser = await User.create({
    name: users.name,
    email: users.email,
    phone: users.phone,
    city: users.city,
    state: users.state,
  });
  res.json(newuser);
});

app.listen(4000);

console.log("app is running on port 4000");
