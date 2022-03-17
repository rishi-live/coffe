"use strict";

const Coffee = require("../database/models/coffee.model");

module.exports.findAllCoffee = async ({ id = "", productType = "", count = false, skip = 0, limit = 0 }) => {
  try {
    let match = {};
    if (productType) match["productType"] = productType;
    // console.log(match);
    let result = await Coffee.find(match).sort({ _id: -1 }).skip(parseInt(skip)).limit(parseInt(limit));
    if (result.length) return result;
    else return [];
  } catch (error) {
    console.log("Something went wrong in Service : findAllCoffee", error.message);
    throw new Error(error.stack);
  }
};
