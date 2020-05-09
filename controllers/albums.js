// == Dependencies ================

const express = require('express');
const router = express.Router();

// == Data Schema =================

const Album = require('../models/albums.js');
const Album_Seed = require('../models/album_seed.js');


// == Add Routes ===================

// Index
router.get('/', (req, res) => {
    Album.find( {}, (error, allAlbums) => {
        res.render('AlbumIndex', {
            albums: allAlbums
        })
    })

});

// New
router.get('/albumnew', (req, res)=> {
   res.render('AlbumNew');
});

// Create
router.post('/', (req, res)=>{

    Album.create(req.body, (error, createdAlbum) => {
        // Once created - respond to client
        res.redirect('/albums');
    })
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Album.findById(req.params.id, (error, foundAlbum) => {

        res.render('AlbumShow', {
            album: foundAlbum
        })
    })
});

// Delete
router.delete('/:id', (req, res) => {
    Album.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/albums'); 
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    // Find our document from collection - using Mongoose model
    Album.findById(req.params.id, (err, foundAlbum) => {
        //render the edit view and pass it the found fruit
        res.render('AlbumEdit', {album: foundAlbum})
    })
});

// Put

router.put('/:id', (req, res) => {
   Album.findByIdAndUpdate(req.params.id, req.body, (err, changedAlbum) => {
        res.redirect('/albums');
    });
});

// Album.create(Album_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided Album data')
// })

Album.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} albums in this database`)
  })



// == Export Router ================
module.exports = router;