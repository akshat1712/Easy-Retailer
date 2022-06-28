const asyncHandler = require('express-async-handler');
const Retailer = require('../models/retailerModel');
const popRetailer = require('../models/popularRetailerModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getRetailers = asyncHandler(async (req, res) => {
    const found = await Retailer.find({});
    if (found) {
        res.status(200).json(found);
    }
    else {
        res.status(500).json({
            errorcode: 500,
            message: "Something went wrong"
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

    
    const retailerExists = await Retailer.findOne({ $or: [{ contact: contact }, { retailer_name: retailer_name }] });
    
    if (retailerExists) {
        res.status(400).json({
            errorcode: 400,
            message: "Retailer already exists..."
        });
        return;
    }

    // Create a entry in Popular Retailer 
    const popretailer= await popRetailer.create({
       Name: retailer_name,
       Contact: contact,
       Queried : 0 
    });

    if( !popretailer){
        res.sendStatus(500).json({
            errorcode:500,
            message:"Could not add retailer to popular retail"
        });
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
            errorcode: 400,
            message: "Could not add retailer please check input"
        });
        return;
    } else {
        res.status(200).json({
            id: retailer.id,
            contact: retailer.contact,
            retailer_name: retailer.retailer_name,
            location: retailer.location,
            token: generateToken(retailer._id)
        });
    }
})

const loginRetailer = asyncHandler(async (req, res) => {
    const { contact, password } = req.body;

    if (!contact || !password) {
        res.status(400).json({
            errorcode: 400,
            message: "Missing credentials"
        });
        return;
    }

    const retailer = await Retailer.findOne({ contact: contact });
    if (retailer && (await bcrypt.compare(password, retailer.password))) {
        res.status(200).json({
            id: retailer.id,
            contact: retailer.contact,
            retailer_name: retailer.retailer_name,
            location: retailer.location,
            token: generateToken(retailer._id)
        })
    } else {
        res.status(401).json({
            errorcode: 401,
            message: "Incorrect username or password"
        })
        return;
    }
})

const currentRetailer = (req, res) => {
    res.status(200).json({
        id: req.retailer.id,
        contact: req.retailer.contact,
        retailer_name: req.retailer.retailer_name,
        location: req.retailer.location,
        token: generateToken(req.retailer._id),
        inventory:req.retailer.inventory
    })
}

const generateToken = (id) => { return jwt.sign({ id }, "secret", {expiresIn: "30d"}) }

module.exports = { getRetailers, registerRetailer, loginRetailer, currentRetailer }; 
