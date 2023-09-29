let object ={
    CollegeName: 'ABC College',
    CollegeID: '1234',
    Departments: ['CSE', 'CIVIL', 'EEE']
}
const prompt=require("prompt-sync")();
var fieldName=prompt("enter a fieldname:")
var value=prompt("enter the field value:")
var dept=prompt("enter to add a dept:")
obj=
    {
        CollegeName: 'ABC College',
        CollegeID: '1234',
        Departments: ['CSE', 'CIVIL', 'EEE'],    
        [fieldName]:value
    }
    obj.Departments.push(dept);


//object.place='hyd';
//object.Departments= ['CSE', 'CIVIL', 'EEE','ECE'];

console.log(obj);