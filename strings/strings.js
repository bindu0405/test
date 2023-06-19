function str1(){
    const prompt=require("prompt-sync")();
var str=prompt("enter a string:");


 function reverseString(str){
        let newString="";
        for(let i=str.length-1;i>=0;i--){
            newString+=str[i];
        }
        return newString;
}
    

   let str1 = reverseString(str);
console.log(str1);

return '\n';
}
function str2(){
    const prompt=require("prompt-sync")();
var str1=prompt("enter 1st string:");
var str2=prompt("enter 2nd strong:");
var a=str1.length;
var b=str2.length;
console.log(str1.length,str2.length);
if(str1==str2){
    console.log("true");
}
else{
 
    console.log("false");
}
return '\n';
}
function str3(){
    const prompt=require("prompt-sync")();
var str=prompt("enter a string:");


 function reverseString(str){
        let newString="";
        for(let i=str.length-1;i>=0;i--){
            newString+=str[i];
        }
        return newString;
}
    

   let str1 = reverseString(str);
    if(str1==str){
        console.log("it is palandrome.");
    }
    else{
        console.log("it is not palandrome.");
    }
    return '\n';
}
function str4(){
    const prompt=require("prompt-sync")();
var str=prompt("enter a string:");
//const vowels=["a","e","i","o","u"]; 
let vowels="aeiou";
function countvowels(str){
    let count=0;
    for(let letter of str){
       // console.log(letter);
        if(vowels.indexOf(letter) > -1){
            count ++;
        }
    }
    return count;
}
console.log(countvowels(str));
return '\n';
}
function str5(){
    const prompt=require("prompt-sync")();
var str1=prompt("enter 1st string:");
var str2=prompt("enter 2nd string:");
var text=str1.concat("", str2);
console.log(text);
return '\n';
}
function str6(){
    const prompt=require("prompt-sync")();
var str1=prompt("enter 1st string:");
var str2=prompt("enter 2nd string:");
//str1="rajarani";
//str2="MANIGANI";
var text1=str1.toUpperCase();
var text2=str2.toLowerCase();
console.log(text1, text2);
return '\n';
}
exports.mani={
    str1,
    str2,
    str3,
    str4,
    str5,
    str6

}