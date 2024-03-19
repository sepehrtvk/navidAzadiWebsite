const express = require("express");
const programController = require("../controllers/programController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("")
  .get(programController.getProgram)
  .post(programController.createProgramAndOnlineVisit);

module.exports = router;
