function fib(n){
    if(n<=1){
        return n;
    }
    
        return fib(n-1)+fib(n-2);
    
}

function calfact(num){
     if(num == 1){
        return 1;
     }

     return num * calfact(num-1);

    }


let str="";
let vowels="aeiou";
function countvowels(str){
    let count=0;
    for(let letter of str){
       // console.log(letter);
        if(vowels.indexOf(letter) > -1){
            count ++;
        }
    }
    return count;
}
//console.log(countvowels(str));

function addstrings(str1,str2){
    return str1+" "+str2;
    return '\n';
}
function sence(age,gender){
    return age+" "+gender;
    return '\n';
}



function evodd(num){
    if(num%2==0){
        console.log("num is the even number.");
    }
    else{
        console.log("num is the odd number.");
    }
    return '\n';
}
function loop(num){
   //console.log(num,"----------in loop---------------")
    for(let i=0;i<=num;i++){
        

        if(i==num||i%2==0){
            
            console.log(i);
            
        }
        return '\n';
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
function sum(n){
    if(n<=1){
        return n;
    }
    
        return n+sum(n-1);
    
}

function add(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1,num2){
    return num1-num2;
}


exports.symbol={
    add,
    subtract,
    sum,
    evodd,
    loop,
    div,
    addstrings,
    sence,
    countvowels,
    calfact,
    fib
}


