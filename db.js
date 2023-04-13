const mongoose = require("mongoose");

// var mongoURL = 'mongodb+srv://admin:admin@cluster0.22dcccm.mongodb.net/hotel';

var mongoURL = 'mongodb://127.0.0.1:27017/hotel';

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo DB connection failed');
});

connection.on('connected', () => {
    console.log('Mongo DB Connection Succesful');
});

module.exports = mongoose;
