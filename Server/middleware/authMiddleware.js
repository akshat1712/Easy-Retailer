const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Retailer = require('../models/retailerModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, "secret");
            const currRetailer = await Retailer.findById(decoded.id).select('-password');
            req.retailer = currRetailer;
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({
                errorcode: 401,
                message: "Unauthorised access: Invalid token"
            })
            return;
        }
    }

    if (!token) {
        res.status(401).json({
            errorcode: 401,
            message: "Unauthorized access: No token "
        })
        return;
    }
})

module.exports = { protect }