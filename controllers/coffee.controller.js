"use strict";

const coffeeService = require("../services/coffe.service");
const constants = require("../constants/index");

exports.fetchAllCoffee = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const { productType, id } = req.query;
    let fetchDesireResult = await coffeeService.findAllCoffee({ productType });
    if (!fetchDesireResult.length) {
      response.status = 202;
      response.message = constants.coffeMessages.NOT_FOUND;
      response.body = {
        data: [],
      };
    }
    fetchDesireResult = fetchDesireResult.map((x) => {
      let obj = {
        id: x._id,
        name: x.name,
        price: x.price,
        type: x.productType,
      };
      return obj;
    });
    response.status = 200;
    response.message = constants.coffeMessages.FOUND;
    response.body = {
      data: fetchDesireResult,
    };
  } catch (error) {
    console.log("Something went wrong in Controller : fetchAllCoffee", error.message);
    throw new Error(error);
  }
  return res.status(response.status).send(response);
};
