var dom=[];

var domDetails={
    id:'',
    name:'',
    age:''

}
const prompt=require("prompt-sync")();
const num=prompt("enter a num:");
for(i=0;i<num;i++){
  const id=prompt("enter id num:");
  const name=prompt("enter name:");
  const age=prompt("enter age:");
  dom.push(
    {
        id:id,
        name:name,
        age:age
    }
  )


let newarr=[];
    if(i%2==0){
      console.log("----------");
      console.log(dom[i]);
    }
    newarr.push(dom[i]);

   console.log(newarr); 
    
}
//console.log(newarr);
    
    

      
    

