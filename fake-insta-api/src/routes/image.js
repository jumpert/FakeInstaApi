const express = require('express');
const imageSchema = require('../models/images');

const imageRouter = express.Router();

// create a new image
imageRouter.post('/images', (req, res) => {
    const image = imageSchema(req.body);
    image
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get all images
imageRouter.get('/images', (req, res) => {
    imageSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get a image
imageRouter.get('/images/:id', (req, res) => {
    const { id } = req.params;
    imageSchema
        .findById({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// delete a image
imageRouter.delete('/images/:id', (req, res) => {
    const { id } = req.params;
    imageSchema
        .remove( {_id: id } )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = imageRouter;