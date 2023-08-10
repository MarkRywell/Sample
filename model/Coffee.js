const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {type: String},
    price: {type: Number, required: true},
    temp: {type: String, required: true}
});

module.exports = mongoose.model('Coffee', CoffeeSchema);