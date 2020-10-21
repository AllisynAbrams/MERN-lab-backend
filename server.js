// environmental variables
require('dotenv').config();
const { PORT = 3500, NODE_ENV = 'development' } = process.env;
// const { PORT = 3500 } = process.env;
const mongoose = require('./db/connection')

// CORS
const cors = require('cors')
const corsOptions = require('./configs/cors.js');

// import and bring in Express
const express = require('express')
const app = express()

// other dependency
const morgan = require('morgan');

// MIDDLEWARE!!!
NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());
app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});


const dressingroomsRouter = require('./controllers/dressingroomsRoutes');
app.use('/dressingrooms', dressingroomsRouter);
const apparelRouter = require('./controllers/apparelRoutes');
app.use('/apparel', apparelRouter);
// routes to send:
// app.use("/apparel", apparelRouter);
// app.use("/dressingrooms", dressingroomsRouter);



// listener checker to ensure connection on port
app.listen(PORT, () => {
	console.log(`listening in on port: ${PORT}`);
});