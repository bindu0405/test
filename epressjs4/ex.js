const prompt=require("prompt-sync")();
var num=prompt("enter a number:");
function perfectSquare(num, callback){                //example for callback function
    const bool=Number.isInteger(Math.sqrt(num)) 

    if(!bool){
        return callback( 'is not a perfect square')
    }   
callback('is perfect square')
}
function callback(data){
  console.log(data)
}
perfectSquare(num, callback)