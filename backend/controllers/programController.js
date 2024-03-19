const Program = require("../models/programModel");

exports.getProgram = async (req, res) => {
  const id = req.query.registeredPlanId;

  try {
    const program = await Program.find({ registeredPlanId: id });

    if (program)
      res.status(200).json({
        status: "success",
        data: {
          program,
        },
      });
    else
      res.status(404).json({
        status: "success",
        data: {
          message: "user has no program",
        },
      });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "user has no program",
      // error: err
    });
  }
};

exports.createProgramAndOnlineVisit = async (req, res) => {
  try {
    const programToUpdate = await Program.findByIdAndUpdate(
      { _id: req.query.programId },
      {
        status: "PENDING",
        onlineVisitId: req.body.onlineVisitId,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        program: programToUpdate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
