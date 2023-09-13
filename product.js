const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetables', 'dairy'],
        lowercase: true,
    }

});

const Product = new mongoose.model("Product", productShema);

module.exports = Product; 