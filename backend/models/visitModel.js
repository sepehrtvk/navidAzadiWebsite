const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  // day: {
  //   type: String,
  //   required: [true, "visit time must have a day"],
  // },
  // time: {
  //   type: String,
  //   required: [true, "visit time must have a time"],
  // },
  date: {
    type: Date,
    required: [true, "visit time must have a date"],
  },
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;
