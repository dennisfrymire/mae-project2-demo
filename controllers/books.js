// == Dependencies ================

const express = require('express');
const router = express.Router();

// == Data Schema ====================
const Book = require('../models/books.js');
const Book_Seed = require('../models/book_seed.js');

// == Add Routes ===================

// Index
router.get('/', (req, res) => {
    Book.find( {}, (error, allBooks) => {
        res.render('BookIndex', {
            books: allBooks
        })
    })
});

// New
router.get('/booknew', (req, res)=> {
   res.render('BookNew');
});

// Create
router.post('/', (req, res)=>{

    Book.create(req.body, (error, createdBook) => {
        // Once  created - respond to client
        res.redirect('/books');
    })
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Book.findById(req.params.id, (error, foundBook) => {
        // render the Show route and pass it the foundFruit
        res.render('BookShow', {
            book: foundBook
        })
    })
});

// Delete
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/books'); 
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    // Find our document from collection - using Mongoose model
    Book.findById(req.params.id, (err, foundBook) => {
        
        res.render('BookEdit', {book: foundBook})
    })
});

// Put

router.put('/:id', (req, res) => {

    Book.findByIdAndUpdate(req.params.id, req.body, (err, changedBook) => {
        res.redirect('/books');
    });
});

// Book.create(Book_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided Book data')
// })

Book.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} books in this database`)
  })



// == Export Router ================
module.exports = router;