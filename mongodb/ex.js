var express=require("express");
const mongoose=require("mongoose");
var app=express();
mongoose.connect("mongodb://localhost:27017/detailsdb",{
    useNewUrlParser:true, useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("succesfully connected")
    }
})

var server=app.listen(3000, ()=>{
    console.log("node at portno: 3000")
})