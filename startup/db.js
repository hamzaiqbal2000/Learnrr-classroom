const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/learnrr")
    .then(() => winston.info("Successfully connected to mongodb.."));
};