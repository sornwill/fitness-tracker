const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    date: { 
        type: Date, 
        required: true, 
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
                trim: true,
                required: true
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
    ]},
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;