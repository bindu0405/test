var express=require("express");
var app=express();
var bodyParser=require("body-parser");
const {commonService}=require("./ex1")
let data=[]
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res){
    res.sendFile('pop.html',{ root:__dirname })
});
app.get('/update', function (req,res){
    res.sendFile('po.html', { root:__dirname })
});

app.get('/delete', function (req,res){
    res.sendFile('pd.html', { root:__dirname })
});

app.post('/submitlogindetails', async function (req, res){
    data=await commonService.arr(req.body)
    res.end(JSON.stringify(data));
});

app.post('/updatedetails',async function(req, res){
   let result=await commonService.updatearr(req.body,data)
   res.end(JSON.stringify(result));
})
app.post('/deletedetails', async function (req, res){
    let ress=await commonService.deletearr(req.body,data)
    res.end(JSON.stringify(ress));

})

var server=app.listen(5050, function(){
    console.log('node started at portno:5050');
});