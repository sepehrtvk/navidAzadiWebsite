const express = require("express");
const onlineVisitController = require("../controllers/onlineVisitController");
// const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(onlineVisitController.getOnlineVisitAll)
  .post(onlineVisitController.createOnlineVisit);

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
