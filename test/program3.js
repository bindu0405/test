let  array={
    CSE:[{
           name:'sai',
            id:'1',
          marks:'23'}],
   EEE:[{
           name:'sai',
            id:'1',
          marks:'23'}],
   CIVIL:[{
           name:'sai',
            id:'1',
          marks:'23'}]

}
let arr1=[]
let arr2=[]
let arr3=[]
const prompt=require("prompt-sync")();
const n=prompt("enter the noof fields:");

for(i=0;i<n;i++){
   const fieldname=prompt("enter the fieldname[CSE,EEE,CIVIL]:");

   //console.log(fieldname)
   let keys=Object.keys(array);
   const num=prompt("enter the noof Objects:");

    for(j=0;j<num;j++){
        for(k=0;k<keys.length;k++){
          // console.log(keys,"===");
          // console.log(keys[k], "++");
           console.log(keys[k],fieldname,"=============");
        
    

        
        if(keys[k]==fieldname&&fieldname=="CSE"){  
            var name=prompt("enter the name:");
            var id=prompt("enter the id:");
            var marks=prompt("enter the marks:");
          array.CSE=funforcse( name, id, marks, array.CSE);
            console.log("CSE",array.CSE);
            break;
        }           

        if(keys[k]==fieldname&&fieldname=="EEE"){
            var name=prompt("enter the name:");
            var id=prompt("enter the id:");
            var marks=prompt("enter the marks:");
            array.EEE=funforeee( name, id, marks, array.EEE);
            console.log("EEE",array.EEE);
            break;
        }           
           
        if(keys[k]==fieldname&&fieldname=="CIVIL"){
            var name=prompt("enter the name:");
            var id=prompt("enter the id:");
            var marks=prompt("enter the marks:"); 
            array.CIVIL=funforcivil( name, id, marks,array.CIVIL); 
            console.log("CIVIL",array.CIVIL);
            break;
       }  
    }
    }      
}

function funforcse(name, id, marks, CSE){
  
  arr1.push({"name":name, "id":id, "marks":marks});
    CSE=arr1;
    return CSE;
}

function funforeee(name, id, marks, EEE){
  arr2.push({"name":name, "id":id, "marks":marks});
    EEE=arr2;
    return EEE;
}

function funforcivil(name, id, marks, CIVIL){
  arr3.push({"name":name, "id":id, "marks":marks});
   CIVIL=arr3;
   return CIVIL;
}
obj={
    CSE  :arr1,
    EEE  :arr2,
    CIVIL:arr3
}

console.log(obj);