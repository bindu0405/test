var student=[];
var stu=[];
var updateObjectValue=(student,stu)=>{
    //console.log(student, stu);
    for(i=0;i<stu.length;i++){
        flag=true;
        for(j=0;j<student.length;j++){
            if(student[j].id==stu[i].id){
               student[j]=stu[i]; 
               flag=false;
               break;
            }
            //if(flag){
              //student.push(stu[i]);  
            //}

        }
        if(flag){
            student.push(stu[i]);  
          }

    }
    return student;
}
exports.mom={
    student,
    stu,
    updateObjectValue
}
