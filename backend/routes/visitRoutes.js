const express = require("express");
const visitController = require("../controllers/visitController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(visitController.getVisitAll)
  .post(visitController.createVisit);

// router
//   .route("/:id")
//   .get(carController.getCar)
//   .patch(carController.updateCar)
//   .delete(
//     authController.protect,
//     authController.restrictTo("admin"),
//     carController.deleteCar
//   );

module.exports = router;
