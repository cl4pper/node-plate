const express = require("express");
const router = express.Router();
const Brand = require("../models/brand");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const brand = await Brand.find();
    res.send(brand);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// CREATING ONE
router.post("/", async (req, res) => {
  const brand = new Brand({
    ...req.body
  });
  try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET ONE

// DELETING ONE

// UPDATING ONE

module.exports = router;
