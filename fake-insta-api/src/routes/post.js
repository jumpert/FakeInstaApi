const express = require('express');
const postImageSchema = require('../models/postImages');

const postRouter = express.Router();

// create a new post
postRouter.post('/posts', (req, res) => {
    const image = postImageSchema(req.body);
    image
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get all posts
postRouter.get('/posts', (req, res) => {
    postImageSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get a post
postRouter.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    postImageSchema
        .findById({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// delete a image
postRouter.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    postImageSchema
        .remove( {_id: id } )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = postRouter;