
var student=[
    {
        studentName:"nani",
        idNo:"101",
        class:"2",
        sec:"b"
    },
    {
        studentName:"vani",
        idNo:"106",
        class:"2",
        sec:"a"
    },
    {
        studentName:"rani",
        idNo:"104",
        class:"1",
        sec:"c"
    }


]
var stu=[
    {
        studentName:"vani",
        idNo:"104",
        class:"2",
        sec:"c"
    },
    {
        studentName:"rani",
        idNo:"101",
        class:"3",
        sec:"b"
    },
    {
        studentName:"phani",
        idNo:"108",
        class:"2",
        sec:"a"
    },
]
// ]
// var idNo='';
// var studentName='';
// var student={idNo,studentName}
// var stu={idNo,studentName}
let o=[];
var updateObjectValue=(student, stu)=>{

   for(let i=0;i<stu.length;i++){
        let flag = true;
        for(let j=0;j<student.length;j++){
            if(student[j].idNo == stu[i].idNo){
                  //stu[j] = student[i];
                  student[j]=stu[i];
                  flag = false;
                  break;
            }
        }
        if(flag){
            student.push(stu[i]);
        }
    }
    //console.log( student);
    return student;
}  


console.log(updateObjectValue(student,stu));

//console.log(student);

// declare an array
//