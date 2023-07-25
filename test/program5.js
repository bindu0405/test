let arr=[]
let arrdetails={
    name:' ',
    id:' ',
    date:' '
}
const prompt=require("prompt-sync")();
console.log("----")
const num=prompt("enter no of objs:");
for(i=1;i<=num;i++){
const name=prompt("enter name:");
const id=prompt("enter id:");
const date=prompt("enter date:");
arr.push({
    name:name,
    id:id,
    date:date
})
}
console.log(arr);
var newdate;
var date=newdate;

/*const filteredarr=arr.map((arr, index) => {
    if(arr.id==2){
        return arr;
    }
})
filteredarr1=filteredarr.filter(function(element){
    return element!==undefined;
 })
     console.log(filteredarr1);*/

     arr.sort(function(a,b){
        let x=a.date.toUpperCase();
        let y=b.date.toUpperCase();
        if(x>y) {return -1;}
        if(x<y) {return 1;}
        return 0;
    })
    console.log(arr);
    

