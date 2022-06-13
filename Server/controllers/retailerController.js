const asyncHandler = require('express-async-handler');
const Retailer = require('../models/retailerModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getRetailers = asyncHandler(async (req, res) => {
    const found = await Retailer.find({});
    if (found){
        res.status(200).json(found);
    }
    else{
        res.status(500).json({
            errorcode : 500,
            message : "Something went wrong"
        });
        return;
    }
})

const registerRetailer = asyncHandler(async (req, res) => {
    const { contact, password, retailer_name, location } = req.body;
    
    if (!contact || !password || !retailer_name || !location) {
        res.status(400).send("Empty fields not allowed");
        throw new Error("Empty fields not allowed");
    }

    const retailerExists = await Retailer.findOne({ $or: [{contact: contact}, {retailer_name: retailer_name}]});

    if (retailerExists) {
        res.status(400).json({
            errorcode : 400,
            message : "Retailer already exists..."
        });
        return;
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const row = {
        contact: contact,
        password: hashedPassword,
        retailer_name: retailer_name,
        location: location,
        inventory: []
    }

    const retailer = await Retailer.create(row);

    if (!retailer) {
        res.status(400).json({
            errorcode : 400,
            message : "Could not add retailer please check input"
        });
        return;
    } else {
        res.status(200).json({
            id: retailer.id,
            contact: retailer.contact,
            retailer_name: retailer.retailer_name,
            location: retailer.location,
            token: jwt.sign({ id: retailer._id }, "secret", { expiresIn: "30d" })
        });
    }
})

module.exports = { getRetailers, registerRetailer }; 
