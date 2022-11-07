const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: Number,
        required: true
    },
    profileImages: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);