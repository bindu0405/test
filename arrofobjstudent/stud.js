const {mom}=require("./student");
//console.log(student);
let studentDetails={
    id:'',
    name:''
}
const prompt=require("prompt-sync")();
const num1=prompt("enter 1st num:");
for(let j=0;j<num1;j++){

    const id=prompt("enter the id:");
    const name=prompt("enter the name:");

    mom.student.push({

      id:id,
      name:name
    });
      
}
const num2=prompt("enter 2nd num:");
for(let i=0;i<num2;i++){

    const id=prompt("enter the id:");
    const name=prompt("enter the name:");

    mom.stu.push({

      id:id,
      name:name
    });
      
}

console.log(mom.updateObjectValue(mom.student,mom.stu));

const n=prompt("enter a number:");
for(k=0;k<n;k++){
var a=prompt("enter id number:");

 let newarr=[];
let flag = true;
for(let i=0;i<mom.student.length;i++){

    if(mom.student[i].id!=a){
        console.log("dewfs");
        //console.log([mom.student[i]]);
        newarr.push(mom.student[i]);
        flag = false;
    

    }



console.log(newarr);
}

    if(flag){
        console.log("no record found");   
    }
}


/*console.log(mom.student.id,"id");
console.log(a,"fjdsfsdkj");
if(a==mom.student.id){
   delete mom.student.id;
    console.log(mom.student);
}
else{
    console.log("no record found");
}*/
