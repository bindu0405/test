const http=require('http');
const {ps}=require('querystring');
let arr=[]
let arr1=[]
let newarr=[]
let newarr1=[]
let outarr=[]
let array=[]
const server=http.createServer( async function(req, res){
    
    const {method, url}=req;  
    if(method==='POST' && url==='/submitformdata'){
       let body=[]
        req.on('data',chunk=>{
            body.push(chunk);
        }).on('end',()=>{
            body=body.toString();
            arr.push(body)
            res.end('details submitted')

        })
        //res.end('details submitted')

    }
    else if(url==='POST'){
        res.end(form);
    }

    
    else if(url==='/getformdata'){
        console.log(arr)
        for(i=0;i<arr.length;i++){
            console.log(arr)
            let splitarr=arr[i].split('&');
            let Object={
                name:splitarr[0].split('=')[1],
                id:splitarr[1].split('=')[1]
            }
            console.log(Object)
            newarr.push(Object);
            console.log(newarr)
        }
    
        res.end(JSON.stringify(newarr));
    }
        
    else if(url==='/deleteformdata'){
        res.end(`
        <!doctype 'html'>
        <html>  
        
        <body>
        <form action='/deletingformdata' method='POST'>
        <lable>idno</lable>
        <input type="number"  name="id"><br></br>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>     
     `)
     res.end('no record found')
     
     }
    else if(method==='POST'&&url==='/deletingformdata'){

            console.log("bindu");
            console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
            console.log(req.method);
            console.log(req.url);
            console.log(newarr1,"]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");

            let body=[]
            req.on('data',(chunk)=>{
                body.push(chunk);
            }).on('end',()=>{
                body=Buffer.concat(body).toString();
                console.log(body);
                arr1.push(body);         
                let splitarr1=arr1;

                let Obj={
                    
                    id:splitarr1[0].split('=')[1]
                }         
                console.log(Obj)
                newarr1.push(Obj);
                console.log(newarr1[0].id,"----")
                //console.log(newarr1.id,"+++++++")

            
                res.end(JSON.stringify(newarr1))

            })
    }
    else if(url==='/todeletingformdata'){
        console.log("123")
    
         //console.log(newarr1[0].id);
         let updatearr=[]

        let flag=true;
          for(let i=0;i<newarr.length;i++){
           if(newarr1[0].id==newarr[i].id){
            flag=false;
            }
            else{
                updatearr.push(newarr[i])
            }

        }  
        newarr = updatearr;
        newarr1.pop();
        arr1.pop();

       console.log(flag,"================",newarr1);

        if(flag){
            res.end('no record found')
        }
    
         

         
           res.end(JSON.stringify(newarr))
    }

    else if(url ==="/afterDeteletion"){
        res.end(JSON.stringify(newarr1))
    }
    else{
        res.end(`
           <!doctype 'html'>
           <html>  
           
           <body>

           
           <form action='/submitformdata' method='POST'>
           <lable>name</lable> 
           <input type="text" name="name"><br></br>
           <lable>idno</lable>
           <input type="number"  name="id"><br></br>
           <input type="submit" value="login">
           
           </form>
           </body>
           </html>     
        `)
    } 


})
server.listen(3060,()=>{
    console.log('server at portno 3060')
})
