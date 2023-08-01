
const prompt=require("prompt-sync")();
var num=prompt("enter a number:")
 function perfectSquare (num){                                          //example for promise function
    return new Promise(function (fullfilled, rejected){
        const bool=Number.isInteger(Math.sqrt(num));
        if(!bool){
            return rejected('Number ${num} is not a perfect square.')
        }  
        fullfilled('Number ${num} is perfect square.')      
    });
}
perfectSquare(num).then(res =>{
    console.log(res)
});


