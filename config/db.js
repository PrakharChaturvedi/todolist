const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/newToDo').on('open', () => {
    console.log('MongoDB connected');
}).on('error', (error) => {
    console.log(error);
});

module.exports = connection;
