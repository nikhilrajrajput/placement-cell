const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nikhilraj:1234@cluster0.qd2v7cs.mongodb.net/placement-cell');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in database connection!!!'));

db.once('open', () => {
    console.log('Connection to database is succesfull.');
});

module.exports = db;
