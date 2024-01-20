const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config.env" });

// app.use(morgan('combined', { stream: accessLogStream }))

// app.use(bodyParser.json());

const userRouter = require("./routes/userRoutes");
// const carRouter = require("./routes/carRoutes");
const registeredPlanRouter = require("./routes/registeredPlanRoutes");

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/registeredPlans", registeredPlanRouter);
// app.use("/api/v1/cars", carRouter);

mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/navidazadidb?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error("FAILED TO CONNECT TO MONGODB");
      console.error(err);
    } else {
      const port = process.env.PORT || 5000;
      console.log("CONNECTED TO MONGODB!!" + port);

      app.listen(port);
    }
  }
);
