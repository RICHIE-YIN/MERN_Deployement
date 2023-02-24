const { Note } = require('../models/note.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createNote = (req, res) => {
    const newNote = req.body
    Note.create(newNote)
    .then((note) => res.json(note))
    .catch((err) => res.json(err)); 
}

module.exports.allNotes = (req, res) => {
    Note.find()
        .then((note) => res.json(note))
        .catch((err) => res.json(err)); 
}

module.exports.getNote = (request, response) => {
    Note.findOne({_id:request.params.id})
        .then(note => response.json(note))
        .catch(err => response.json(err))
}

module.exports.updateNote = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Note.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((updatedNote) => res.json(updatedNote))
    .catch ((err) => res.status(400).json(err))
}

module.exports.deleteNote = (request, response) => {
    Note.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





