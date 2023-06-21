const http=require('http');
const {qs}=require('querystring');
let arr=[];
let newarr=[]
const server = http.createServer((req, res) => {
      const { url, method } = req;
    
      if (method === 'POST' && url === '/submitstudentDetails') {
        // Handle the POST request for /submitstudentDetails
        // ...        
        let body=[];
        req.on('data',(chunk)=>{
            //console.log(chunk,"chunk")
            body.push(chunk);
        }).on('end',()=>{
           body = body.toString();
           console.log(body);
           arr.push(body)
           //arr.push(body.split("&"))
           //console.log(arr)
           //arr.push(Object)
           //console.log(Object)
        
        })

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Student details submitted successfully');
      } else if (url === '/getstudentDetails') {
        // Handle the GET request for /getstudentDetails
        // ..
    //    nam=raj e&role&id , name&role&id

       //[studentNAme=ravi&id=2&rollNAme=12&&class="CSE"]
        //[studentName=ravi,id=2,rollName=12,class="CSE"]
        //[studenName,ravi],[id,2]
         for(let i=0;i<arr.length;i++){
             let  splitArray = arr[i].split('&');
                   let Object={
                       name:splitArray[0].split("=")[1],
                       id:splitArray[1].split("=")[1],
                       emailID:splitArray[2].split("=")[1],
                       mobile:splitArray[3].split("=")[1]
             }
             newarr.push(Object);
              
         }
                  res.end(JSON.stringify(newarr));
      } else {
        // Handle other routes or methods
        res.end(`
           <!doctype 'html'>
           <html>
           <body>
           <form action="/submitstudentDetails" method='POST'>
           <h1>STUDENT DETAILS<h1>
           <lable>StudentName:</lable>
           <input type="text" id="studentname" name="StudentName"><br></br>
           <lable>IdNo:</lable>
           <input type="number" id="idno" name="IdNo"><br></br>
           <lable>EmailId</lable>
           <input type="text" id="emailid" name="EmailId"><br></br>
           <lable>MobileNo:</lable>
           <input type="number" id="mobileno" name="MobileNo"><br></br>


           <input type="submit" value="login">
           </form>
           </body>
           </html>
   
         
        `)    
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });
    
    server.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
    
    