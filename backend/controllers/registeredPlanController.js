const RegisteredPlan = require("../models/registeredPlanModel");
const User = require("../models/userModel");
const Program = require("../models/programModel");
const { divideDateRangeIntoSegments } = require("../utils/index");

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
  const startDate = new Date();
  const endDate = new Date(
    date.setMonth(date.getMonth() + (req.query.timeslot == "6month" ? 6 : 12))
  );

  try {
    const newRegisteredPlan = await RegisteredPlan.findByIdAndUpdate(
      { _id: req.query.id },
      {
        startDate: startDate,
        endDate: endDate,
        status: "ACTIVE",
        totalPlan: req.query.timeslot == "6month" ? 4 : 8,
        receivedPlan: 0,
      }
    );

    try {
      const programsToInsert = [];

      const timesForProgram = divideDateRangeIntoSegments(
        startDate,
        endDate,
        req.query.timeslot == "6month" ? 4 : 8
      );

      timesForProgram.map((time) => {
        const programTemp = {
          type: newRegisteredPlan.type,
          registeredPlanId: req.query.id,
          startDate: time.start,
          endDate: time.end,
        };

        programsToInsert.push(programTemp);
      });

      const insertedPrograms = await Program.insertMany(programsToInsert);

      res.status(200).json({
        status: "success",
        data: {
          RegisteredPlan: newRegisteredPlan,
          insertedPrograms,
        },
      });
    } catch (error) {
      console.error("Error inserting programs:", error);
      res.status(500).send(error.message);
    }
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
