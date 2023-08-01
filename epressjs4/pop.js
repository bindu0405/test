var express=require("express");
var app=express();
var bodyParser=require("body-parser")
const {mom}=require('./pip')

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req,res){
    res.sendFile('id.html', { root:__dirname })
});

app.post('/submitdetails', async function(req, res){
    let data=await mom.fun(req.body);
    res.end(JSON.stringify(data))
});

app.listen(2000, function(){
    console.log("node has started at port no: 2000.")
})

