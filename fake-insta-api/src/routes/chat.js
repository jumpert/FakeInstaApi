const express = require('express');
const chatSchema = require('../models/chats');

const chatRouter = express.Router();

// create a new chat
chatRouter.post('/chats', (req, res) => {
    const chat = chatSchema(req.body);
    chat
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get all chats
chatRouter.get('/chats', (req, res) => {
    chatSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get a chat
chatRouter.get('/chats/:id', (req, res) => {
    const { id } = req.params;
    chatSchema
        .find({ chatId: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// delete a chat
chatRouter.delete('/chats/:id', (req, res) => {
    const { id } = req.params;
    chatSchema
        .remove( {_id: id } )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = chatRouter;