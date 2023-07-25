var arr=[]
var arrdetails=[
    {
        id:" ",
        name:" ",
        clas:" "
    }
]
const prompt=require("prompt-sync")();
console.log("----")
const num=prompt("enter no of objs:");
for(i=1;i<=num;i++){
const id=prompt("enter id:");
const name=prompt("enter name:");
const clas=prompt("enter class:");
arr.push({
    id:id,
    name:name,
    clas:clas
})
}
console.log(arr);
arr.sort(function(a,b){return b.id-a.id});
console.log(arr);

/*const filteredarr=arr.filter((obj, index) => {
    if(index>4){
        return arr;
    }    
})
console.log(filteredarr)*/
arr.pop();

