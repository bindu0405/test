var http=require('http');
var server=http.createServer(function(req,res){
    //console.log(req.url);
    if(req.url=='/school'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end;
    }    
    else if(req.url=="/students"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<html><body><p>This is student details.</p></body></html>');
        res.end;
    }
    else if(req.url=='/staff'){
        res.writeHead(200, {'Content-type':'text\html'});
        res.write('<html><body><p>This is staff details.</p></body></html>');

    }
    else if(req.url=='/management'){
        res.writeHead(200, {'Content-type':'text\html'});
        res.write('<html><body><p>This is management details.</p></body></html>');

    }
    else if(req.url=='/branches'){
        res.writeHead(200, {'Content-type':'text\html'});
        res.write('<html><body><p>This page is branch details.</p></body></html>');

    }

    else
        res.end('Invalid Request!');
    
    
});
server.listen(500);
console.log('node.js web server at port no:500 is running...');
