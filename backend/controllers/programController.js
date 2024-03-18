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
