const mongoose = require('mongoose');

const postImageSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postImageSchema);