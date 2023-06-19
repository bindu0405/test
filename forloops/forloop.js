function for1(){
    let n=4;
    var str=" ";
    let count=1;
    for(i=0; i<=n; i++){
        for(j=1; j<n-i; j++){
            str +=count;
            count++;
        }
        str=str+"\n";
      }
      console.log(str);
 return '\n';   
}
function for2(){
    for(i=1;i<=10;i++){
        console.log("hello");  
        break;
    }
    return '\n';
}
function for3(){
    let cars=["BMW","volvo","ford"];
let i=0;
let text="";
//str="";
while(cars[i]){
    text+=cars[i];
    i++;
    text+="\n";

}
console.log(text);
return '\n';
}
function for4(){
    let i=0;
for(;;){
    if(i>3)break;
    i++;
    console.log(i);
    
}
return '\n';
}
function for5(){
    let sum=0;
    for( i=1;i<=10;i++){
        sum+=i;
        sum+='\n';
    }console.log(i);
    let sun=0;
    for( j=1;j<=5;j++){
        sum+=j;
        sum+='\n';
    }console.log(j);
    var add;
    add = i+j;
    console.log(add);
return '\n';
}
function for6(){
    let n=5;
let str="";
for(i=1;i<=n;i++){
    for(j=n;j>i;j--){
        str+=" ";
    }
    for(k=0;k<i*2-1;k++){
        str+="*";
    }
    str+="\n";
}
for(i=1;i<=n-1;i++){
    for(j=0;j<i;j++){
      str+=" ";
    }
    for(k=(n-i)*2-1;k>0;k--){
      str+="*";  
    }
    str+="\n";
}


console.log(str);
return '\n';
}
exports.bindu={
for1,
for2,
for3,
for4,
for5,
for6
}