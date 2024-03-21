const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "program must have a type"],
    enum: {
      values: ["online1", "online2", "visit"],
      message: "program must have a type of online1 or online2 or visit.",
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
  status: {
    type: String,
    default: "NOTREQUESTED",
    enum: {
      values: ["RECEIVED", "PENDING", "NOTREQUESTED"],
      message:
        "status must have a type of RECEIVED or PENDING OR NOTREQUESTED.",
    },
  },
  registeredPlanId: {
    type: mongoose.Schema.ObjectId,
    ref: "RegisteredPlan",
    required: [true, "program must belong to a registeredPlan."],
  },
  photoList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File", // Assuming 'File' is your model for storing file metadata
    },
  ],
  photoListPath: [
    {
      type: String,
    },
  ],
  programPdf: {
    type: String,
  },
  onlineVisitId: {
    type: mongoose.Schema.ObjectId,
    ref: "Visit",
  },
  createdAt: { type: Date, default: Date.now() },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
