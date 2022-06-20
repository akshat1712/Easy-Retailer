const popItems = require("../models/popularItemModel");
const asyncHandler = require('express-async-handler');

const getPopularItems =  asyncHandler(async (req,res)=>{
    const items=await popItems.find({},{"Item":1}).sort({"Queried":-1});
    if( items){
        res.sendStatus(200).json(items);
    }
    else{
        res.sendStatus(500).json({
            errorcode: 500,
            message: "Something went wrong"
        });
    }
})

module.exports= {getPopularItems};