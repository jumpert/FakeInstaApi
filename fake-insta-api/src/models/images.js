const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Image', imageSchema);