const mongoose=require("mongoose");

const popularRetailSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Name is required"]
    },
    Contact:{
        type:String,
        required:[true,"Contact Details is required"]
    },
    Queried:{
        type:Number,
        required:[true,"Should be Initialized with 0"]
    }
})

module.exports= mongoose.model("PopularRetail",popularRetailSchema);