const Exercises = require("../models/dbExercise.js");

module.exports = function(app) {
    //insert api calls 
    app.get("/api/workouts/range", (req, res) => {
        console.log("Getting Data for stats");
        Exercises.find({})
            .then(dbExercises => {
                res.json(dbExercises);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        console.log("Filling data into index")
        Exercises.find({})
          .then(dbExercises => {
            res.json(dbExercises);
          })
          .catch(err => {
            res.json(err);
        });
      });

    app.post("/api/workouts", ({ body }, res) => {
        console.log("Created Exercises");
        const exercises = new Exercises(body);
        Exercises.create(exercises)
            .then(dbExercises => {
                res.json(dbExercises);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        console.log("Updated Exercises");
        Exercises.findOneAndUpdate(
            { _id: req.params.id }, 
            { $push: { exercises: req.body } }
        )
            .then(dbExercises => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};