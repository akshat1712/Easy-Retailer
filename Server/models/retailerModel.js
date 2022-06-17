const mongoose = require("mongoose");


const retailerSchema = new mongoose.Schema({
    contact: {
        type: Number,
        required: [true, "Contact number is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    retailer_name: {
        type: String,
        required: [true, "Name is required"]
    },
    location: {
        type: String,
        required: [true, "Location is Required"]
    },
    inventory: [{
        name: String,
        quantity: Number
    }]
});

module.exports = mongoose.model('Retailer', retailerSchema);