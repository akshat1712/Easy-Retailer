const mongoose=require("mongoose");

const popularItemSchema = new mongoose.Schema({
    Item:{
        type:String,
        required:[true,"Item is required"]
    },
    Queried:{
        type:Number,
        required:[true,"Quantity is required"]
    }
})

module.exports= mongoose.model("PopularItem",popularItemSchema);