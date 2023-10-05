//Controller means add Logic here..!!

const Note = require('../Models/notesModel') //import Model here

//Get all Notes
const getAllNotes = async(req, res)=>{
  //mongoose command to get all the data
  const notes = await Note.find({}) // it's model
  res.json(notes)
}

//Post new Note
const postNewNote = async (req, res) => {
    //1. Receive Data Notes
    const note = {
        name : req.body.name,
        age : req.body.age,
        grade : req.body.grade
    }
    //2. mongoose command to store data in mongoDB
    //command - model.create(object)
       await Note.create(note)

    //3. Respose back to the server
    res.json({message: "Create a new Note", note:note})
}

//3. Update Note 
const UpdateNote = async (req, res)=>{
  const noteID = req.params.id
  const Updatednote = {
    name : req.body.name,
    age : req.body.age,
    grade : req.body.grade
}
//3.
  // 3. Update data in the database based on ID
  await Note.findByIdAndUpdate(noteID, Updatednote)
  
  res.status(200).json({message: "Note Updated", note:Updatednote})
}

//4. Delete Note
const DelNote = async(req, res)=>{
  const noteID = req.params.id
  const note = await Note.findByIdAndDelete(noteID)
  res.status(200).json({message: "Note Deleted", note:note})
}

//5. Single Note Excess
const fetchANote = async (req, res)=>{
  const noteID = req.params.id
  const note = await Note.findById(noteID)

  res.status(200).json(note)
}











module.exports = {getAllNotes,postNewNote, UpdateNote, DelNote, fetchANote}