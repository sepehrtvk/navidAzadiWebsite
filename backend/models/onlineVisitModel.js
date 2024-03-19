const mongoose = require("mongoose");

const onlineVisitSchema = new mongoose.Schema({
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
    required: [true, "OnlineVisit time must have a date"],
  },
  link: {
    type: String,
    required: [true, "OnlineVisit time must have a link of google play"],
  },
});

const OnlineVisit = mongoose.model("OnlineVisit", onlineVisitSchema);

module.exports = OnlineVisit;
