// importing Schema and model that are object-type things built into mongoose (kind of like useEffect or useState in react) so that we don't have to write more code to define const Schema = .. or write mongoose.model when defining model name like const Fruit - mongoose.model('Fruit', fruitSchema, etc.)
const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

// dressingrooms schema
const dressingroomsSchema = new Schema(
    {
      roomNumber: String,
      customerName: String,
      items: [
        {ref: 'Apparel', type: Schema.Types.ObjectId}
      ]
	}
);

// dressingrooms model
const Dressingrooms = model('Dressingrooms', dressingroomsSchema);

// export model
module.exports = Dressingrooms;
