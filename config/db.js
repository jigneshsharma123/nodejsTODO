const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Node_todo');

const db  = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open',()=> {
    console.log("successfully connected to the db");
})
module.exports = db;