const express = require("express");
const programController = require("../controllers/programController");
// const authController = require("../controllers/authController");

const router = express.Router();

router.route("").get(programController.getProgram);

module.exports = router;
