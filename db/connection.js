// environmental variables
require('dotenv').config()

// SETTING UP MONGOOSE CONNECTION:
// mongoDB URI - copied .env file into db folder (this format of doing it is instead of the previous const mongoURI = hardcoded path) 
const { MONGODBURI } = process.env;
// import mongoose and configure select connection params
const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true, }
// create the connection to the db
const db = mongoose.connection
// connect to the db/URI
mongoose.connect(MONGODBURI, config)

// additional connection messages
db.on('open', () => console.log('You are connected to Mongo', MONGODBURI))
db.on('close', () => console.log('You are disconnected to Mongo'))
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
// db.on('connected', () => console.log('mongo connected: ', mongoURI));
// db.on('disconnected', () => console.log('mongo disconnected'));

module.exports = mongoose
