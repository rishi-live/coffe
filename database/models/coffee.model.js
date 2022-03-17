const mongoose = require("mongoose");

const coffeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
      lowercase: true,
    },
    price: {
      type: String,
      required: true,
    },
    // name: {
    //     type: String,
    //     required : true
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("coffee_master", coffeSchema, "coffee_master");
