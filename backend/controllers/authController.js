const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  console.log(token);
  console.log(process.env.JWT_COOKIE_EXPIRES_IN);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      password: req.body.password,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      res.status(404).json({
        message: "incorrect phone or password",
      });
      return next();
    }
    const user = await User.findOne({ phone }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(404).json({
        message: "incorrect phone or password",
      });
      return next();
    }

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(403).json({
        error: "please login first !",
      });
      return next();
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);

    req.user = currentUser;
    next();
  } catch (err) {
    res.status(403).json({
      error: err,
    });
  }
};
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (req.user && !roles.includes(req.user.role)) {
      res.status(403).json({
        error: "you don not have premission",
      });
      return next();
    }
    next();
  };
};
