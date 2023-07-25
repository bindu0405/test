var arr1=[];
var arr2=[];
var updateObjectValue=(arr1, arr2)=>{
    let flag=true;
    for(i=0;i<arr2.length;i++){
        for(j=0;j<arr1.length;j++){
            if(arr1[j].id==arr2[i].id){
                arr1[j]==arr2[i];
                flag=false;
                break;
            }
        }
        if(flag){
            arr1.push(arr2[i])
        }
    }
    return arr1;   
}
exports.lol={
    arr1,
    arr2,
    updateObjectValue
}
