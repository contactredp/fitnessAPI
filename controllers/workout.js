const Workout = require("../models/Workout");
const { errorHandler } = require('../auth');

module.exports.addWorkout = (req, res) => {

    let newWorkout = new Workout ({
        userId : req.user.id,
        name: req.body.name,
        duration: req.body.duration
    })

    return newWorkout.save()
    .then(workout => {
        return res.status(201).send(workout);
    })
    .catch(error => errorHandler(error, req, res));
    
}

module.exports.getMyWorkouts = (req, res) => {
    return Workout.find({userId : req.user.id})
    .then(workouts => {

        if (workouts.length > 0) {

            return res.status(200).send(workouts);
        }

        return res.status(404).send({ message: 'No added workouts' });
    })
    .catch(error => errorHandler(error, req, res));
};