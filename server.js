// environmental variables
require('dotenv').config();
const { PORT = 3500, NODE_ENV = 'development' } = process.env;

// CORS
const cors = require('cors')
const corsOptions = require('./configs/cors.js');

// import and bring in Express
const express = require('express')
const app = express()

// other dependency and router imports
const morgan = require('morgan');
const apparelRouter = require('./controllers/apparelRoutes')
const dressingroomsRouter = require('./controllers/dressingroomsRoutes');

// MIDDLEWARE!!!
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: false }))

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

// routes to send:
// app.use('/apparel', apparelRouter);
// app.use('/dressingrooms', dressingroomsRouter);



// listener checker to ensure connection on port
app.listen(PORT, () => {
	console.log(`listening in on port: ${PORT}`);
});