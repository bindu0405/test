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



  

    if(i%2==0){
      console.log("----------");
      console.log(dom[i]);
    }
    
    
}
//console.log(newarr);
    
    

      
    

