const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET single workouts
router.get("/:id", getWorkout);

//POST new workot
router.post("/", createWorkout);

//DELETE new workot
router.delete("/:id", deleteWorkout);

//UPDATE new workot
router.patch("/:id", updateWorkout);

module.exports = router;
