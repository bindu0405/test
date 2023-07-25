let  array={
    CSE:[{
           name:' ',
            id:' ',
          marks:' '}],
   EEE:[{
           name:' ',
            id:' ',
          marks:' '}],
   CIVIL:[{
           name:' ',
            id:' ',
          marks:' '}]

}
const prompt=require("prompt-sync")();
const n=prompt("enter the noof fields:");
for(i=0;i<n;i++){
   const fieldname=prompt("enter the fieldname[CSE,EEE,CIVIL]:");
   console.log(fieldname)
   let keys=Object.keys(array);
   const num=prompt("enter the noof Objects:");
    for(j=0;j<num;j++){
        for(k=0;k<keys.length;k++){
           console.log(keys);
           console.log(keys[k]);
           console.log(keys[k],fieldname,"=============");
           var name=prompt("enter the name:");
           var id=prompt("enter the id:");
           var marks=prompt("enter the marks:");
        } 
    }
    let flag=true;
    switch(array){
        
        case "CSE":
            array.CSE=funforcse( name, id, marks, array.CSE);
            console.log("CSE",array.CSE);
            flag=false;
            break;
           

        case "EEE":
            array.EEE=funforeee( name, id, marks, array.EEE);
            console.log("EEE",array.EEE);
            flag=false;
            break;
           
           
        case "CIVIL":
            array.CIVIL=funforcivil( name, id, marks,array.CIVIL); 
            console.log("CIVIL",array.CIVIL);
            flag=false;
            break;
    }        
}
function funforcse(name, id, marks){
    if(CSE.length>0){
        var flag=true;
        for(i=0;i<CSE.length;i++){
            if(CSE[i]>0){
                CSE.push({name:name, id:id, marks:marks});
            }

        }
    }
    return CSE;
}
