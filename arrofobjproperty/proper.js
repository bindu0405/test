const {take}=require("./property");
let propertyDetails={
    name:'',
    gender:'',
    age:''
}
const prompt=require("prompt-sync")();
const num1=prompt("enter 1st num:");
for(let i=0;i<num1;i++){


    const name=prompt("enter the name:");
    const gender=prompt("enter the gender:");
    const age=prompt("enter the age:");

    take.property.push({

    
      name:name,
      gender:gender,
      age:age,
    });
      
}
for(let i=0;i<=1;i++){

const name=prompt("enter the name:");
    const gender=prompt("enter the gender:");
    const age=prompt("enter the age:");

    take.updateObj[{

        
        name:name,
        gender:gender,
        age:age,
    }];
}
      

     
  console.log(take.updatedProperty(take.property,take.updateObj));

