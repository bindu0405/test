var student=[];//taking 1st arr
var stu=[];//taking 2nd arr
var updateObjectValue=(oldArray, newarr)=>{//updating the 1st arr obj values compared to 2nd arr

     console.log(oldArray,newarr)
   for(let i=0;i<newarr.length;i++){//looping the 2nd arr upto given legth
        let flag = true;  //avoid the copy of compared two objs
        for(let j=0;j<oldArray.length;j++){//looping the 1st arr upto given len
            if(oldArray[j].idno == newarr[i].idno){//comparing the 1st arr with 2nd arr
                  oldArray[j]=newarr[i];//updating th evalues of 1st arr with 2nd arr
                  flag = false;
                  break;
            }
        }
        if(flag){
            oldArray.push(newarr[i]);//inserting the uncompared values of 2nd arr 
        }
    }
    //console.log( student);
    return oldArray;// returning the updated 1st arr
}  
//updateObjectValue=(student,stu));


exports.mani={//exporting the files 
    student,
    stu,
    updateObjectValue
}
