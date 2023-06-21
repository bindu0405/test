const http=require('http');
const fs=require('fs');
const port=3000;
const server=http.createServer(function(req,res){
    res.writeHead(200,'Content-Type','text/html')
    fs.readFile('index.html',function(error,data){
        if(error){
            res.write("error:file does not exist.")
        }else{
            res.write(data)
        }
    
    
    res.end()
    })

})
server.listen(port, function(error){
    if(error){
        console.log("error:file does not found.",error)
    }else{
        console.log("server is ready to run...",port)
    }
})