const express = require("express");
const programController = require("../controllers/programController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("")
  .get(programController.getProgram)
  .post(programController.createProgramAndOnlineVisit);

router.route("/all").get(programController.getPendingPrograms);
router.route("/id").get(programController.getPendingProgramsById);

module.exports = router;
