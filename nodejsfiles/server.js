var http=require('http');
var server=http.createServer(function(req,res){
    //console.log(req.url);
    if(req.url=='/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end;
    }    
    else if(req.url=="/student"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<html><body><p>This is student page.</p></body></html>');
        res.end;
    }
    else if(req.url=='/admin'){
        res.writeHead(200, {'Content-type':'text\html'});
        res.write('<html><body><p>This page is Admin page.</p></body></html>');

    }
    else
        res.end('Invalid Request!');
    
    
});
server.listen(5000);
console.log('node.js web server at port no:5000 is running...');



var fs=require('fs');
fs.appendFile('mod.js','hello world!',function(err){
    if(err)
    console.log(err);
    else
    console.log('append operation complete'); 
});
