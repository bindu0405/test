const {give}=require('./persons.js');
let personDetails={
    no:'',
    name:'',
    gender:'',
    age:''
}
const prompt=require("prompt-sync")();
const num1=prompt("enter 1st num:");
for(let i=0;i<num1;i++){

    const no=prompt("enter the no:",'\n');
    const name=prompt("enter the name:",'\n');
    const gender=prompt("enter the gender:",'\n');
    const age=prompt("enter the age:",'\n');
    give.person.push({

      no:no,
      name:name,
      gender:gender,
      age:age,
    });
      
}
const num2=prompt("enter 2nd num:");
for(let j=0;j<num2;j++){
    
    const no=prompt("enter the no:",'\n');
    const name=prompt("enter the name:",'\n');
    const gender=prompt("enter the gender:",'\n');
    const age=prompt("enter the age:",'\n');

    give.per.push({

        no:no,
        name:name,
        gender:gender,
        age:age,
    });
      
}
     
  console.log(give.updateObjectValue(give.person,give.per));

