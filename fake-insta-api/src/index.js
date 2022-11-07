const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const chatRoutes = require('./routes/chat');
const userRoutes = require('./routes/user');
const imageRoutes = require('./routes/image');
const postRoutes = require('./routes/post');

// connections
const app = express();
require('./dataBase');
const port = process.env.PORT || 3000;
const version = 'v1';

// middleware
app.use(express.json());
app.use('/api/' + version, chatRoutes);
app.use('/api/' + version, userRoutes);
app.use('/api/' + version, imageRoutes);
app.use('/api/' + version, postRoutes);

// routes
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(port, () => console.log('MongoDB listening on port', port));