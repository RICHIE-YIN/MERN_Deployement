const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters long"]
    },
    body: { 
        type: String,
        required: [true, "Body is required"],
        maxLength: [255, "Body must not be over 255 characters long"]
    }
}, { timestamps: true });
module.exports.Note = mongoose.model('Note', NoteSchema);