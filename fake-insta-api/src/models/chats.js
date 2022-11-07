const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    chatId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Chat', chatSchema);

