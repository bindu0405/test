var person=[];
var per=[];
var updateObjectValue=(person, per)=>{
    for(let i=0;i<per.length;i++){
      let flag=true;
      for(let j=0;j<person.length;j++){
        if(person[j].no==per[i].no){
            person[j]=per[i];
            flag=false;
            break;
        }
        
        if(flag){
           person.push(per[i]);
        }
      }

    }
    return person;

}
exports.give={
    person,
    per,
    updateObjectValue
}