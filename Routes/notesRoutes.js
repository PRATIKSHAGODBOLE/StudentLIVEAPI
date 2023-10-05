const express = require('express')
const {getAllNotes,postNewNote, UpdateNote, DelNote, fetchANote} = require('../Controller/noteController')
const router = express.Router()
//app replace to router
//REMOVE ALL THE NOTE EXCESS - api/notes

//Api's Points
//GET Methods
router.get('/', getAllNotes)

//Post Methods
router.post('/', postNewNote)
    //cut the data from here and paste to controller folder


//PUT Method
router.put('/:id', UpdateNote )

//Delete Method
router.delete('/:id', DelNote )

//Fetch Single Note
router.get('/:id', fetchANote )

module.exports = router