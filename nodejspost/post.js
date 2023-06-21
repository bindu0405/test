const http=require('http');
const {parse}=require('json');

const server=http.createServer((req,res)=>{
    if(req.method==='POST'){ 
        body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        })
        req.on('end',()=>{
           bod = Buffer.concat(body).toJSON;
           res.end(bod);
           res.end('details submitted.')
        })
    }
    else{
        res.end(`
        <!doctype 'html'>
        <html>
        <body>
        <h1>send data to the 'POST' http method</h1>
        <form action="/" method='post'>
        <lable>User Name</lable>
        <input type="text" id="username" name="UsreName"><br></br>
        <lable>Password</lable>
        <input type="password" id="password" name="Password"><br></br>
        <input type="submit" value="login">
        </form>
        </body>
        </html>
        `)
    }
});
server.listen(2025)