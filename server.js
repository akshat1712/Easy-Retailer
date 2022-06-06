require('dotenv').config();


const express=require('express'); // Getting Express.js
const app=express(); // making an instance of the express

const mongoose= require('mongoose'); // Getting Mongoose to communicate with mongoDB

mongoose.connect(process.env.DATABASE,{
    dbName:'Inventories',
}, err => err? console.log(err): console.log("Connected"));


const RetailerSchema= new mongoose.Schema({
    Retailer: String,
    Location: String,
    Items: Object
});

const Table1=mongoose.model('Table1',RetailerSchema);

const row= new Table1({
    name:'EFGH',
    Location:"Delhi",
    Items:{
        "Hide&Seek":10,
        "Lays":20,
    }
});

row.save().then( ()=>console.log("Added"));


app.listen(3000);



app.get('/',(req,res)=>{
    Table1.find({},(err,found)=>{
        if(!err){
            res.send(found);
        }
        else
        {
            console.log(err);
            res.send("Some Error Occured");
        }
    })
})