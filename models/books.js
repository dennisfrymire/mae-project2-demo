const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// == CREATE SCHEMA ==========================

const bookSchema = new Schema ({ 
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String},
    yearReleased: Number,
    dateFinished: String,
    firstTime: Boolean,
    img: String,
    review: { type: String},
    rating: { type: Number, min: 0, max: 5 },
    tags: [String],
}, {timestamps: true});

// == CREATE MODEL FROM SCHEMA ===================

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;