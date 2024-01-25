const express = require("express");
const registeredPlanController = require("../controllers/registeredPlanController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("")
  // .get(carController.getAllCars)
  // .get(carController.getAllCars)
  .get(registeredPlanController.getRegisteredPlan)
  .post(registeredPlanController.createRegisteredPlan);

// router.route("/:id").get(registeredPlanController.getRegisteredPlan);
// .patch(carController.updateCar)
// .delete(
//   authController.protect,
//   authController.restrictTo("admin"),
//   carController.deleteCar
// );

module.exports = router;
