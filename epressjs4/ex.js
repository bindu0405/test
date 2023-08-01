const prompt=require("prompt-sync")();
var num=prompt("enter a number:");
function perfectSquare(num, callback){                //example for callback function
    const bool=Number.isInteger(Math.sqrt(num)) 

    if(!bool){
        return callback('number ${number} is not a perfect square')
    }   
callback('number ${number} is perfect square')
}
function callback(data){
  console.log(data)
}
perfectSquare(num, callback)