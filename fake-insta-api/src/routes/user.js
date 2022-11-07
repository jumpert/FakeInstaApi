const express = require('express');
const userSchema = require('../models/users');

const userRouter = express.Router();

// create a new user
userRouter.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});

// get all users
userRouter.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});

// get a user
userRouter.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});

// update a user
userRouter.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, username, profilePic, profileImages } = req.body;
    userSchema
        .updateOne( {_id: id }, {$set: { firstName, lastName, username, profilePic, profileImages}} )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});

// delete a user
userRouter.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove( {_id: id } )
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});


module.exports = userRouter;