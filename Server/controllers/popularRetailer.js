const popRetail = require("../models/popularRetailerModel");

const asyncHandler = require('express-async-handler');

const getPopularRetailer =  asyncHandler(async (req,res)=>{
    const Retailer=await popRetail.find({},{"Item":1,"Name":1}).sort({"Queried":-1});
    if( Retailer){
        res.status(200).json(Retailer);
    }
    else{
        res.status(500).json({
            errorcode: 500,
            message: "Something went wrong"
        });
    }
})

module.exports= {getPopularRetailer};