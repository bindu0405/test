var arr=[]

exports.mom={fun}
async function fun(req){
    //var arr=[]
    console.log(req)
    obj={
        name:req.name,
        sex:req.sex,
        country:req.country  
    }
    arr.push(obj);
    console.log(arr)
    return arr;
}
