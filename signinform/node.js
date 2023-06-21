const http=require('http');
const fs=require('fs');
const port=5000;
const server=http.createServer(function(req,res){
    console.log(req);
    res.writeHead(200,'Content-Type','text/html')
    fs.readFile('login.html',function(error,data){
        if(error){
            res.write("error:file does not exist.")
        }else{
            res.write(data)
        }
        res.writeHead(200,'Content-Type','text/php')
        /*fs.readFile('action_page.php',function(error,data){
            if(error){
                res.write("error:file does not exist.")
            }else{
                res.write(data)
            }
        })*/
    
    
    
    //res.write()
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