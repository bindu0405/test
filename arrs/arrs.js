const prompt=require("prompt-sync")();
const a=parseInt(prompt("enter a num:"));
let arr=[];
for(i=1;i<=a;i++){
const b=prompt("enter a name:");
arr.push(b);
}
for(let i=0;i<arr.length;i++){
    
    let body="name"
    console.log(body,":",arr[i]);

return '/n'
}
//console.log(arr[i],body);