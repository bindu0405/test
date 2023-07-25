const http=require('http')
let arr=[]
let newarr=[]
const {parse}=require('querystring');
const server=http.createServer((req,res)=>{
    const {method,url}=req;
    if (method==='POST'&&url==='/submitlogindetails'){
        let body=[]
        req.on('data',chunk=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            body=body.toString();
            console.log(body);
            arr.push(body);
            console.log(arr)
            
        })
        res.end("details submitted")
    }
    else if(url==='/getlogindetails'){
        for(i=0;i<arr.length;i++){
            let splitarr=arr[i].split('&');
            let Object={
                username:splitarr[0].split('=')[1],
                emailid:splitarr[1].split('=')[1],
                password:splitarr[2].split('=')[1]
            }
            console.log(Object)

            //console.log(newarr)
            newarr.push(Object);
            //res.end(JSON.stringify(Object));
            //console.log(Object)
            console.log(newarr)

        }
        res.end(JSON.stringify(newarr));
    }

    else{
        res.end(`
            <!doctype 'html'>
            <html>
            <body>
            <form action='submitlogindetails' method='POST'>
            <lable>username:</lable>
            <input type="text" id="username" name="username"><br></br>
            <lable>emailid:</lable>
            <input type="email" id="emailid" name="emailid"><br></br>
            <lable>password:</lable>
            <input type="password" id="password" name="password"><br></br>
            <input type="submit" value="login">
            </form>
            </body>
            </html>

        `)
        res.end('not found')
    }
})
server.listen(3030,()=>{
    console.log('server is at portno 3000')
})