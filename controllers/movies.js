// == Dependencies ================

const express = require('express');
const router = express.Router();

// == Data Schema ==================

const Movie = require('../models/movies.js');
const Movie_Seed = require('../models/movie_seed.js');

// == Add Routes ===================

// Index
router.get('/', (req, res) => {
    Movie.find( {}, (error, allMovies) => {
        res.render('MovieIndex', {
            movies: allMovies
        })
    })

});

// New
router.get('/movienew', (req, res)=> {
    res.render('MovieNew');
    });

// Create
router.post('/', (req, res)=>{
    Movie.create(req.body, (error, createdMovie) => {
        // Once  created - respond to client
        res.redirect('/movies'); 
    })
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Movie.findById(req.params.id, (error, foundMovie) => {
        
        res.render('MovieShow', {
            movie: foundMovie
        })
    })
});

// Delete
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/movies'); 
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    // Find our document from collection - using Mongoose model
    Movie.findById(req.params.id, (err, foundMovie) => {
        
        res.render('MovieEdit', {movie: foundMovie})
    })
});

// Put

router.put('/:id', (req, res) => {
   
    Movie.findByIdAndUpdate(req.params.id, req.body, (err, changedMovie) => {
        res.redirect('/movies');
    });
});

// Movie.create(Movie_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided Album data')
// })

Movie.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} movies in this database`)
  })

// == Export Router ================
module.exports = router;