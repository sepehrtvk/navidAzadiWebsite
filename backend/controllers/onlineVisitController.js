const OnlineVisit = require("../models/onlineVisitModel");

exports.getOnlineVisitAll = async (req, res) => {
  try {
    const allVisits = await OnlineVisit.find();
    res.status(200).json({
      status: "success",
      results: allVisits.length,
      data: {
        onlineVisits: allVisits,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.createOnlineVisit = async (req, res) => {
  try {
    const newVisit = await OnlineVisit.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        onlineVisit: newVisit,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
