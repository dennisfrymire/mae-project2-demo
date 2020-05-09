const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// == CREATE SCHEMA ==========================

const albumSchema = new Schema ({ 
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: String,
    yearReleased: Number,
    dateFinished: String,
    img: String,
    rating: { type: Number, min: 0, max: 5 },
    review: String,
}, {timestamps: true});

// == CREATE MODEL FROM SCHEMA ===================

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;