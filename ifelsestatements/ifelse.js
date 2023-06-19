
function evenodd(num){
    if(num%2==0){
        console.log("num is the even number.");
    }
    else{
        console.log("num is the odd number.");
    }
    return '\n';
}
function voterlist(a,b){
if( a >=21 && b =='male'){
    console.log("you are eliglible to apply"+b);
}
else if(a >=18 && b == 'female'){
    console.log("you are eligible to apply"+b);
}
else{
    console.log("you are not eligible");
}
return '\n';
}
function div(num){
    if(num%2==0){
        console.log("num is divisible by 2");
    }
    else{
        console.log("num is not divisible by 2");
    }
    return '\n';
}
function displaytime(time){
    if(time<10){
    console.log(greetings="gud morning");
}
else if(time<15){
    console.log(greetings="gud today");
}
else{
      console.log(greetings="gud evening");
}
return '\n';
}

function posneg(num){
    // check if number is positive
if(num>0){
    console.log("number is positive");
}
//check if number is equal to zero
else if(num=0){
     console.log("number is zero");

}
//check if number is negative
else {
    console.log("number is negative");
}
return '\n';
}


exports.kavali={
    evenodd,
    voterlist,
    div,
    displaytime,
    posneg
}
