const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// == CREATE SCHEMA ==========================

const movieSchema = new Schema ({ 
    title: { type: String, required: true },
    genre: { type: String},
    yearReleased: { type: Number },
    dateWatched: String,
    platform: { type: String},
    img: String,
    review: { type: String},
    rating: { type: Number, min: 0, max: 5.0 },
    tags: { type: [String] },
}, {timestamps: true});

// == CREATE MODEL FROM SCHEMA ===================

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;