const mongoose = require('mongoose');

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB to Connected'))
    .catch(err => console.log(err));
