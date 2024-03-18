const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const multer = require("multer");

const app = express();

dotenv.config({ path: "./config.env" });

// app.use(morgan('combined', { stream: accessLogStream }))

// app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const upload = multer({ storage: storage });

const userRouter = require("./routes/userRoutes");
// const carRouter = require("./routes/carRoutes");
const registeredPlanRouter = require("./routes/registeredPlanRoutes");
const visitRouter = require("./routes/visitRoutes");
const programRouter = require("./routes/programRoutes");
const Program = require("./models/programModel");
const FileModel = require("./models/fileModel");

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
// app.use(express.static(`${__dirname}/uploads`));
app.use("/uploads", express.static("uploads"));
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

// Endpoint to handle file uploads
app.post("/upload", upload.array("photos", 5), async (req, res) => {
  try {
    const programId = req.body.programId;

    // Save file metadata to the database
    const uploadedFiles = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      program: programId,
    }));
    const savedFiles = await FileModel.insertMany(uploadedFiles);

    // Update the user record to reference these files
    await Program.findByIdAndUpdate(programId, {
      $push: {
        photoList: { $each: savedFiles.map((file) => file._id) },
      },
      $push: {
        photoListPath: { $each: savedFiles.map((file) => file.path) },
      },
      status: "PENDING",
    });

    res.send("Files uploaded and associated with user successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

// ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/registeredPlans", registeredPlanRouter);
app.use("/api/v1/visit", visitRouter);
app.use("/api/v1/program", programRouter);
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
