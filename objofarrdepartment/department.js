const department={
    
  EEE:[{

    }],
    ECE:[{

    }],
    CSE:[{

    }]
}
const dept={
    EEE:[{
 
     }],
     ECE:[{
 
     }],
     CSE:[{
 
     }]
 }
 

/*const promtp=require("prompt-sync")();
const n=prompt("enter the noof departments:");
let branches=object.keys.department;
for(i=0;i<n;i++){
    const a=("enter the department name:");
    const stid=prompt("enter stid num:");
    const stname=prompt("enter stname");
    const year=prompt("enter the year:");
    for(let i=0;i<branches.length;i++){
        switch(branch[i]){

            case "EEE":  
                   break;
            case "ECE":
                break;
            case "CSE":
                break;
        }
    }*/

    var updateObjectValue=(department, dept)=>{
        for(i=0;i<dept.length;i++){
            flag=true;
            for(j=0;j<department.lenght;j++){
                if(department[j]=dept[i]){
                 department[j]=dept[i];
                 flag=false;
                 break;
                }
            }
            if(flag){
             department.push(dept[i]);
            }
        }
          return department;

    } 

exports.none={
    department,
    dept,
    updateObjectValue

}