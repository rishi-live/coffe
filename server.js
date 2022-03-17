"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const dbConnection = require("./database/connection");
dotEnv.config();

const PORT = process.env.PORT || 3001;
const version = "v2";
const app = express();

dbConnection();
//TODO: mongo connection check later
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: " 50mb" }));

app.use("/api/" + version + "/coffee", require("./routes/coffee.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
