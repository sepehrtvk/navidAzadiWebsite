const mongoose = require("mongoose");

const registeredPlanSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "plan must have a type"],
    enum: {
      values: ["online1", "online2", "visit"],
      message: "plan must have a type of online1 or online2 or visit.",
    },
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
  active: {
    type: Boolean,
    default: false,
  },
  timeslot: {
    type: String,
    enum: {
      values: ["12month", "6month"],
      message: "timeslot must have a type of 12month or 6month.",
    },
  },
  totalPlan: {
    type: Number,
    default: null,
    enum: {
      values: [0, 4, 8],
      message: "totalPlan must have a type of 0 or 4 or 8.",
    },
  },
  receivedPlan: {
    type: Number,
    default: null,
    enum: {
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      message: "receivedPlan must have a type of 0 to 8.",
    },
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    unique: true,
    required: [true, "plan must belong to a user."],
  },

  createdAt: { type: Date, default: Date.now() },
});

const RegisteredPlan = mongoose.model("RegisteredPlan", registeredPlanSchema);

module.exports = RegisteredPlan;
