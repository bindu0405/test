const {lol}=require('./practice.js');
let arr={
    id:'',
    name:''
} 
const prompt=require("prompt-sync")();
const num1=prompt("enter a num:");
for(i=0;i<num1;i++){
    const no=prompt("enter a no:");
    const name=prompt("enter a name:")
     lol.arr1.push({
        id:"id",
        name:"name"
     })
}
const num2=prompt("enter a num:");
for(i=0;i<num2;i++){
    const no=prompt("enter a no:");
    const name=prompt("enter a name:");
    lol.arr2.push({
        id:"id",
        name:"name"
    })
}
console.log(lol.updateObjectValue(lol.arr1,lol.arr2));