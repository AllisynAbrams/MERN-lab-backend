// importing Schema and model that are object-type things built into mongoose (kind of like useEffect or useState in react) so that we don't have to write more code to define const Schema = .. or write mongoose.model when defining model name like const Fruit - mongoose.model('Fruit', fruitSchema, etc.)
const { Schema, model } = require("mongoose");

// apparel schema
const apparelSchema = new Schema(
    {
       itemType: String,
       brand: String,
       color: String,
       size: String
    }   
)

// apparel model
const Apparel = model('Apparel', apparelSchema)

// export model
module.exports = Apparel
