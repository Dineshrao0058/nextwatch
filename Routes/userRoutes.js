const express = require("express");
const router = express.Router();
const users = require('../models/userModel');

const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:8000"],
};

router.post("/adduser", cors(corsOptions), (req, res) => {
  const user = new users(req.body);
  user.save();
  res.status(201).json(user);
});

router.post("/login", cors(corsOptions), async (req, res) => {
  const user = await users.findOne(req.body);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(201).json("Wrong credentials");
  }
});

router.get("/:id", cors(corsOptions), async (req, res) => {
  const user = await users.findById(req.params.id);
  user.save();
  res.status(201).json(user);
});

router.put("/update/:id", cors(corsOptions), async (req, res) => {
  const user = await users.findByIdAndUpdate(req.params.id, req.body);
  user.save();
  res.status(201).json(user);
});

router.delete("/delete/:id", cors(corsOptions), async (req, res) => {
  const user = await users.findByIdAndDelete(req.params.id);
  user.save();
  res.status(201).json(user);
});

module.exports = router;