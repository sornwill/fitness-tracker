const Exercises = require("../models/dbExercise.js");

module.exports = function(app) {
    //insert api calls 
    app.get("/api/workouts/", (req,res) => {
        Exercises.find({}).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", ({body}, res) => {
        const exercise = new Exercises(body);
        Exercises.create(exercise).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts", (req, res) => {
        Exercises.find({}).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req,res) => {
        Exercises.findOneAndUpdate(
            {_id: req.param.id},
            {$push: {exercises: req.body}}
        ).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err =>{
            res.json(err);
        });
    });
};