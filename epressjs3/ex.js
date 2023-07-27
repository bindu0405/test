var express=require("express");
var app=express();
var bodyParser=require("body-parser");

var arr=[]
var arr1=[]
var farr1=[]
var newarr=[]
var newarr1=[]
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res){
    res.sendFile('pop.html',{ root:__dirname })
});
app.get('/update', function (req,res){
    res.sendFile('po.html', { root:__dirname })
});
app.post('/submitlogindetails', function (req, res){
   
    arr.push(req.body.id+' '+req.body.firstname+' '+req.body.lastname)
    console.log(arr)
    function fun(arr){
        
        for(i=0;i<arr.length;i++){            
            let splitarr=arr[i].split(' ');
            console.log(splitarr);
            let object={
                id:splitarr[0],
                firstname:splitarr[1],
                lastname:splitarr[2]
            }
                console.log(object);
            arr1.push(object);
            console.log(arr1);
            const ids = arr1.map(({ id }) => id);
            farr1 = arr1.filter(({ id }, index) =>
            !ids.includes(id, index + 1));


        }
        return farr1;
    }
     fun(arr);
    console.log(farr1,);
    res.end(JSON.stringify(farr1));
});
app.post('/updatedetails', function(req,res){
    newarr.push(req.body.id+' '+req.body.firstname+' '+req.body.lastname);
    console.log(newarr);
    let splitnewarr=newarr[0].split(' ');
    console.log(splitnewarr);
    let object={
        id:splitnewarr[0],
        firstname:splitnewarr[1],
        lastname:splitnewarr[2]

    }
    console.log(object);
    newarr1.push(object);
    console.log(newarr1);
    res.send(JSON.stringify(newarr1))


})
app.get('/updatedata', function(req,res){
    
    for(let i=0;i<farr1.length;i++){
       if(farr1[i].id==newarr1[0].id){
           farr1[i].firstname=newarr1[0].firstname;  
           farr1[i].lastname=newarr1[0].lastname;                                       
            
       }
    }
       res.send(JSON.stringify(farr1));
       newarr1.pop();

})

var server=app.listen(5050, function(){
    console.log('node started at portno:5050');
});