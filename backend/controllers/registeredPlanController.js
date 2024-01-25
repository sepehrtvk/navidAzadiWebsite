const RegisteredPlan = require("../models/registeredPlanModel");

// exports.getAllCars = async (req, res) => {
//   try {
//     let allCars;
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(",").join(" ");
//       allCars = await Car.find().sort(sortBy);
//     } else {
//       allCars = await Car.find();
//     }
//     // const allCars = await Car.find();

//     res.status(200).json({
//       status: "success",
//       results: allCars.length,
//       data: {
//         cars: allCars,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed",
//       error: err,
//     });
//   }
// };

exports.getRegisteredPlan = async (req, res) => {
  const id = req.query.userId;

  try {
    const registeredPlan = await RegisteredPlan.findOne({ userId: id });

    if (registeredPlan)
      res.status(200).json({
        status: "success",
        data: {
          registeredPlan,
        },
      });
    else
      res.status(404).json({
        status: "success",
        data: {
          message: "user has no active plan",
        },
      });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "user has no active plan",
      // error: err
    });
  }
};

exports.createRegisteredPlan = async (req, res) => {
  try {
    const newRegisteredPlan = await RegisteredPlan.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        registeredPlan: newRegisteredPlan,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

// exports.updateCar = async (req, res) => {
//   try {
//     const newCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     res.status(200).json({
//       status: "success",
//       data: {
//         car: newCar,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed",
//       message: err,
//     });
//   }
// };

// exports.deleteCar = async (req, res) => {
//   try {
//     const newCar = await Car.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: "success",
//       data: {
//         car: newCar,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed",
//       message: err,
//     });
//   }
// };
