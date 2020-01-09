const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Brands",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      require: false
    }
  })
);
