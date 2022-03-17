"use strict";

const express = require("express");
const router = express.Router();
const { fetchAllCoffee } = require("../controllers/coffee.controller");

router.get("/", fetchAllCoffee);

module.exports = router;
