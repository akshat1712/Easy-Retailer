const popItems = require("../models/popularItemModel");
const asyncHandler = require('express-async-handler');

const getPopularItems =  asyncHandler(async (req,res)=>{
    const items=await popItems.find({},{"Item":1}).sort({"Queried":-1});
    if( items){
        res.status(200).json(items);
    }
    else{
        res.status(500).json({
            errorcode: 500,
            message: "Something went wrong"
        });
    }
})

module.exports= {getPopularItems};