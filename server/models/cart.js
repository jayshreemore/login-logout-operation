const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    description: String,
    name: String,
    id:String
});

module.exports = mongoose.model('cart', userSchema, 'cart');