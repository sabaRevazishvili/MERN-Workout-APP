const express = require("express");
require("dotenv").config();

//express app
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//conect to db
const { setServers } = require("dns/promises");
setServers(["8.8.8.8", "1.1.1.1"]);
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests

    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
