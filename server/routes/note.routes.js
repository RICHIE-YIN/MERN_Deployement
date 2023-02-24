const NoteController = require('../controllers/note.controller');
module.exports = function(app){
    app.get('/api', NoteController.index);
    app.post('/api/note', NoteController.createNote);
    app.get('/api/allnotes', NoteController.allNotes);
    app.get('/api/note/:id', NoteController.getNote);
    app.put('/api/note/:id', NoteController.updateNote);
    app.delete('/api/note/:id', NoteController.deleteNote);
}