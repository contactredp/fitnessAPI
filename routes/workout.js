const express = require('express');
const workoutController = require('../controllers/workout');
const auth = require("../auth");

const { verify } = auth;

const router = express.Router();

router.post('/addWorkout', verify, workoutController.addWorkout);
router.get('/getMyWorkouts', verify, workoutController.getMyWorkouts);

module.exports = router; 