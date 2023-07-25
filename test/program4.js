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
let newarr=[];
for(i=0;i<=arr[i];i++){
if(i%2==0){
  console.log("----------");
  console.log(arr[i]);
}
newarr.push(arr[i]);
}

console.log(newarr); 


const filteredarr=arr.map((arr, index) => {
    if(arr.id!=2){
        return arr;
    }
})
filteredarr1=filteredarr.filter(function(element){
   return element!==undefined;
})
    console.log(filteredarr1);


    const evenarr=filteredarr1.map((filteredarr1, index)=>{
        if(index%2==0){
            return filteredarr1;
        }
    })
    evenarray=evenarr.filter(function(element){
        return element!==undefined;
    })
    console.log(evenarray);