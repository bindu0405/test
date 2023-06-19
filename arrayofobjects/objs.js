const {mani}=require("./objects.js");//reusing the function  //wrong

let objectDetails = {  //defining the object 
    idno:'',
    name:'',
    class:'',
    sec:''
}
const prompt=require("prompt-sync")();
const num = prompt("enter a number");//taking first arr length

for(let i=0;i<num;i++){//assining the values for 1st arr upto the given num

const idno=prompt("enter the idno:");//giving the user input for ist arr
const name=prompt("enter the name:");
const cls =prompt("enter the class:");
const sec=prompt("enter the sec:");

 mani.student.push({
   idno : idno,//user input values assined to definedobject
   name : name,
   class : cls,
   sec : sec,
 })

     // inserting the noof objects present in the 1st arr  // wrong


}

const num2 = prompt("enter a number");
for(let i=0;i<num2;i++){

    const idno=prompt("enter the idno:");
const name=prompt("enter the name:");
const cls =prompt("enter the class:");
const sec=prompt("enter the sec:");

 mani.stu.push({
   idno : idno,
   name :name,
   class : cls,
   sec : sec,
 });


}
//console.log(mani.stu.length,mani.student.length,"]]]]]]]]]]]]]]]]]]]]]]]]]]");
console.log(mani.updateObjectValue(mani.student,mani.stu));//
//for(let i=0;i<=student.length;i++){

//}