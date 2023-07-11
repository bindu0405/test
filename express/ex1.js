var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send("my name is BINDU PERAVALI")
})
var server=app.listen(8088, function(){
    console.log('listening on portno 8088')
})