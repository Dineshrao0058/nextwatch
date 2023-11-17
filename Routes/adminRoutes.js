const express = require("express");
const router = express.Router();
const admins = require("../models/adminModel");

const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:8000"],
};

router.post("/addadmin", cors(corsOptions), (req, res) => {
  const admin = new admins(req.body);
  admin.save();
  res.status(201).json(admin);
});

router.post("/login", cors(corsOptions), async (req, res) => {
  const admin = await admins.findOne(req.body);
  if (admin) {
    res.status(201).json(admin);
  } else {
    res.status(201).json("Wrong credentials");
  }
});

router.get("/:id", cors(corsOptions), async (req, res) => {
  const admin = await admins.findById(req.params.id);
  admin.save();
  res.status(201).json(admin);
});

router.put("/update/:id", cors(corsOptions), async (req, res) => {
  const admin = await admins.findByIdAndUpdate(req.params.id, req.body);
  admin.save();
  res.status(201).json(admin);
});

router.delete("/delete/:id", cors(corsOptions), async (req, res) => {
  const admin = await admins.findByIdAndDelete(req.params.id);
  admin.save();
  res.status(201).json(admin);
});

module.exports = router;