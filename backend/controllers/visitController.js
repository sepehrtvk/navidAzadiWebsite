const Visit = require("../models/visitModel");

exports.getVisitAll = async (req, res) => {
  try {
    const allVisits = await Visit.find();
    res.status(200).json({
      status: "success",
      results: allVisits.length,
      data: {
        allVisits,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.createVisit = async (req, res) => {
  try {
    const newVisit = await Visit.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        Visit: newVisit,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
