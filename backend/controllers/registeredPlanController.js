const RegisteredPlan = require("../models/registeredPlanModel");
const User = require("../models/userModel");

exports.getRegisteredPlanAll = async (req, res) => {
  try {
    // const allPlans = await RegisteredPlan.find().sort("createdAt");

    const allPlans = await RegisteredPlan.aggregate([
      {
        $lookup: {
          from: "users", // collection name in db
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
    ])
      .sort("createdAt")
      .exec();

    res.status(200).json({
      status: "success",
      results: allPlans.length,
      data: {
        allPlans,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

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

exports.updateRegisteredPlan = async (req, res) => {
  const date = new Date();
  try {
    const newRegisteredPlan = await RegisteredPlan.findByIdAndUpdate(
      { _id: req.query.id },
      {
        startDate: new Date(),
        endDate: new Date(
          date.setMonth(
            date.getMonth() + (req.query.timeslot == "6month" ? 6 : 12)
          )
        ),
        status: "ACTIVE",
        totalPlan: req.query.timeslot == "6month" ? 4 : 8,
        receivedPlan: 0,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        RegisteredPlan: newRegisteredPlan,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

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
