function while1(){
    let sum=0;
let n=1;

//var str =prompt("nani","vani","rani","gani","mani");
const prompt=require("prompt-sync")();
var str =prompt("enter a name:").split(',');
console.log(str);
//var n=parseInt(prompt("enter 1st num:"));
var i =0;
while(i < str.length){
    console.log(i,":",str[i]);
    i++;
}return '\n';
}
function while2(){
    let cars = ["BMW","Volvo","ford"];
let i=0;
let text=" ";
while(cars[i]){
    text +=cars[i];
    i++;
    console.log(cars);
}
return '\n';
}
function while3(){
    i=0;
while(i<=3){
    console.log(i);
    i++;
}
return '\n';
}
function while4(){
    let sum=" ";
let n=0;
do{
    const prompt=require("prompt-sync")();
    number=prompt("enter a name:");
    console.log(typeof number);
    console.log(typeof sum);
    sum = sum + number;
    console.log(sum);
    n++;
}while(n<5)
console.log(`total sum is ${sum}`);
return '\n';
}
function while5(){
    let i=1;
let n=5;
while(i<=n){
    console.log(i);
    i++;
}
return '\n';
}
function while6(){
    let sum=0;
//let temp=number;
const prompt=require("prompt-sync")();
const number=prompt("enter a number:");
let temp=parseInt(number);
while(temp>0){
    let reminder=temp%10;
    sum += reminder*reminder*reminder;
    temp=temp/10;
    
}
if(sum==parseInt(number)){
    console.log(`${number} is an armstrong`);
}
else{
    console.log(`${number} is not an armstrong`);
}
return '\n';
}
exports.nani={
    while1,
    while2,
    while3,
    while4,
    while5,
    while6
}