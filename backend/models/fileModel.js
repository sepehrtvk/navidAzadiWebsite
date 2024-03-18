const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  // any other relevant metadata
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
