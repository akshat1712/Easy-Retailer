const asyncHandler = require('express-async-handler');
const popretailer = require("../models/popularRetailerModel");
const popitem = require("../models/popularItemModel");

const PopRetailer = asyncHandler( async(Retailer) => {
    for( const result of Retailer){
        for ( const seller of result.sellers){
            console.log(seller.retailer_name);
           await popretailer.updateOne({Name:seller.retailer_name}, {$inc: {Queried:1}});
        }
    }
});

const PopItems = asyncHandler( async(Items) => {
    for( const item of Items){
        const count=await popitem.countDocuments({Item:item.name});
        if( count==0)
        {
            console.log("CreateOne");
            await popitem.create( {Item:item.name , Queried:1});
        }
        else
        {
            console.log("CreateMany");
            await popitem.updateOne( {Item:item.name}, { $inc : {Queried:1}});
        }
    }
});

module.exports = {PopRetailer,PopItems};