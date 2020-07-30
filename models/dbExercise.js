const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise_schema = new Schema({
    date:{
        type:Date,
        required:true,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Exercise = mongoose.model("Exercise", exercise_schema);

module.exports = Exercise;