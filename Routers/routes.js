const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
// const router = require("express");
const { Blogs } = require("../Modals/db.js");
const app = express();
const router = express.Router();
const {
  getrequest,
  postrequest,
  getbyId,
  updaterequest,
  deleterequest,
} = require("../services/index");

router.get("/blogpage", getrequest);
router.post("/", postrequest);
router.get("/:Id", getbyId);
router.patch("/:Id", updaterequest);
router.delete("/:Id", deleterequest);

module.exports = router;
