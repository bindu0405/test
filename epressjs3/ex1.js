exports.commonService={arr,
    updatearr,
    deletearr
}

let array=[]
async function arr(req){
    console.log(req)
    console.log(req.id)
    obj={
        id:req.id,
        firstname:req.firstname,
        lastname:req.lastname
    }
    array.push(obj);
    console.log(array)
return array;    
}

async function updatearr(req){
   let res=[]
    console.log(req)
    console.log(array)
    let flag=true;
    for(let i=0;i<array.length;i++){
        if(array[i].id==req.id){
            array[i].firstname=req.firstname;
            array[i].lastname=req.lastname;
           res.push(array);
           flag=false;
        }
    }
    if(flag){
        res.push("file not found!")
    }

     
    console.log(res)
    return res;     
}

async function deletearr(req){
    let ress=[]
    let flag=true;
     for(let i=0;i<array.length;i++){
        if(array[i].id==req.id){
            flag=false;
        }
        else{
            ress.push(array[i]);
        }
     }
     array=ress;
    console.log(ress)

     return ress;
 
}