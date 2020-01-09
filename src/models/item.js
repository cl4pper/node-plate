const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Stock",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 4
    },
    quantity: {
      type: Number,
      required: false
    },
    price: {
      type: Number,
      require: false
    },
    stockTo: {
      type: String,
      enum: ["site", "shop", "partner"],
      require: true
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brands",
      required: false
    }
  })
);
