function arr1(){
    //const cars=["volvo","BMW","sabb",45,34];
//accessing an arr element
//let car=cars[0];
//changing an arr element
//cars[2]="apaachi";
const cars=[20,30,10,3,7];
cars.sort(function(a,b){return b-a});
cars.reverse();
console.log(cars);
return '\n';
}
function arr2(){
    //let person = {firstname:"bindu", lastname:"peravali", age:21};
//console.log(person.sort);
var  fruits=["mango","banana","orange"," applle"];
//s=fruits[3];
//fruits.push("goa","grapes");
//fruits.pop();
//fruits.shift();
//fruits.unshift("lemon");
//fruits[2]="kiwi";
//delete fruits[2];
//fruits[2]="kiwi";
//var veg=["tomato","brinjal","bendi"];
//var names=["bindu","bujji","santhi"];
//var cook=fruits.concat(veg,names);
var citrus=fruits.slice(1,3)
console.log(citrus);
return '\n';
}
function arr3(){
    const person=[];
person[0]="Bindu";
person[1]="peravali";
person[3]=23;
console.log(person);
return '\n';
}
function arr4(){
    const arr1=[[1,2],[3,4],[5,6]];
const newarr=arr1.flat();
console.log(newarr);
return '\n';
}
function arr5(){
    const prompt=require("prompt-sync")();

let n = parseInt(prompt("enter a number:"));
let arr=[];
for(let i=0;i<n;i++){
    var value =prompt("enter a name:");
     arr.push(value); // arr[i] = value;
}
console.log(arr);
return '\n';
}
function arr6(){
    const prompt=require("prompt-sync")();
const a=parseInt(prompt("enter a num:"));
let arr=[];
for(i=1;i<=a;i++){
const b=prompt("enter a name:");
arr.push(b);
}
for(let i=0;i<arr.length;i++){
    console.log(i+1,":",arr[i]);
}
//console.log(arr);
return '\n';
}
exports.vani={
    arr1,
    arr2,
    arr3,
    arr4,
    arr5,
    arr6
}