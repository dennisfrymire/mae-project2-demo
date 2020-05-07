// == Dependencies ================

const express = require('express');
const router = express.Router();
const Index = require('../models/index.js')
const Movie = require('../models/movies.js');
const Book = require('../models/books.js');
const Album = require('../models/albums.js');

// == Routes ==========================

//Index

router.get('/', (req, res) => {
  Index.find( {}, (error, justIndex) => {
    res.render('Index', {
      index: justIndex
    })
  });
});

//   router.get('/albums', (req, res) => { 
//     Album.find( {}, (error, allAlbums) => {
//         res.render('Index', {
//             albums: allAlbums
//           })
//         });

// router.get('/movies', (req, res) => {
// Movie.find( {}, (error, allMovies) => {
//     res.render('Index', {
//         movies: allMovies
//     })
//   })
// })

// router.get('/books', (req, res) => {
// Book.find( {}, (error, allBooks) => {
//     res.render('Index', {
//         books: allBooks
//     })
//   });
// });


  // });


// == Export Router ================
module.exports = router;