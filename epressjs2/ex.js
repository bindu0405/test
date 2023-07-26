var express=require("express");
var bodyParser = require('body-parser');
var app=express();
var arr=[]
var arr1=[]
var farr1=[]
var newarr=[]
var newarr1=[]
var newarr2=[]

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req,res){    
    res.sendFile('inde.html', { root: __dirname });
});
app.get('/update', function (req,res){
    res.sendFile('index.html', { root: __dirname });
});
app.get('/delete', function (req,res){
    res.sendFile('in.html', { root:__dirname });
});

app.post('/submitlogindetails', function(req,res){
    //var name=req.body.fistname+' '+req.body.lastname;    
    //res.send(name + '   submitted successfully!');
    arr.push(req.body.username+' '+req.body.emailid +' '+req.body.password);       
    res.send(arr);
    console.log(arr);
    for(i=0;i<arr.length;i++){
        let splitarr=arr[i].split(' ');
        console.log(splitarr);
    
        let object={
            username:splitarr[0],
            emailid:splitarr[1],
            password:splitarr[2]
        }
        console.log(object)
        arr1.push(object);
        console.log(arr1)
        const ids = arr1.map(({ username }) => username);
         farr1 = arr1.filter(({ username }, index) =>
    !ids.includes(username, index + 1));
 
console.log(farr1);
    }

res.end(JSON.stringify(farr1));

    res.end('details submitted!');

});

app.post('/updatedetails', function (req,res){
    newarr.push(req.body.username+' '+req.body.emailid+' '+req.body.password);
    res.send(newarr);
    console.log(newarr);
    let splitnewarr=newarr[0].split(' ');
    console.log(splitnewarr);
    let Object={
        username:splitnewarr[0],
        emailid:splitnewarr[1],
        password:splitnewarr[2]

    }
    console.log(Object)
    newarr1.push(Object);
    console.log(newarr1)

res.end(JSON.stringify(newarr1));


    res.end('updating details!');
    

});
app.post('/deletedetails', function (req,res){
    newarr.push(req.body.username);
    res.send(newarr);
    console.log(newarr);
    let splitnewarr=newarr[0].split(' ');
    console.log(splitnewarr);
    let Object={
        username:splitnewarr[0]
    

    }
    console.log(Object)
    newarr2.push(Object);
    console.log(newarr2)

res.end(JSON.stringify(newarr2));


    res.end('updating details!');
    

});


app.get('/updatedata', function(req,res){
     var updatearr=[]
    
    //console.log(farr1,"++++++++++++++++++=");
    //console.log("123");
    for(let i=0;i<farr1.length;i++){
       if(farr1[i].username==newarr1[0].username){
           farr1[i].emailid=newarr1[0].emailid;  
           farr1[i].password=newarr1[0].password;                               
           updatearr.push(farr1[i]);
           console.log(updatearr);
           
            
       }

    }
     

    //})  

    res.send(updatearr);
    newarr1.pop();
});
//console.log(farr1);

app.get('/deletedata', function(req,res){
    //console.log(farr1,"ghujihyghuj");
    //console.log(newarr1);
    let uparr=[]

    let flag=true;
      for(let i=0;i<farr1.length;i++){
       if(farr1[i].username==newarr2[0].username){
        flag=false;
        }
        else{
            uparr.push(farr1[i])
        }
        console.log(uparr);

    }  
    

    res.send(uparr);
});
var server=app.listen(5000, function(){
    console.log('node started at portno:5000');
})