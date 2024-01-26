const express = require("express");
const registeredPlanController = require("../controllers/registeredPlanController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("")
  // .get(carController.getAllCars)
  // .get(carController.getAllCars)
  .get(registeredPlanController.getRegisteredPlan)
  .patch(registeredPlanController.updateRegisteredPlan)
  .post(registeredPlanController.createRegisteredPlan);

router.route("/all").get(registeredPlanController.getRegisteredPlanAll);

module.exports = router;
