
var car=[
    {
    "colour": "red",
    "type": "minivan",
    "registration": new Date('20-08-2000'),
    "capacity": 7
},
{
    "colour": "purpule",
    "type": "station vagan",
    "registration": new Date('20-08-2023'),
    "capacity": 5
},
{
    "colour": "red",
    "type": "cabrio",
    "registration": new Date('20-08-2010'),
    "capacity": 2
}
]
//console.log(car);
 
//car.unshift(a);

//console.log(car);
let b={
    "colour": "white",
    "type": "minivan",
    "registration": new Date('20-08-2030'),
    "capacity": 7
}
car.push(b);
//console.log(car);
let c={
    "colour": "blue",
    "type": "minivan",
    "registration": new Date('20-08-2000'),
    "capacity": 5
}
car.splice(3,0,c);
//car.pop();
//car.push(b);
//car.shift();
//car.find.red
//console.log(car);
let cars=[
    {
        "colour": "white",
        "type": "station vagan",
        "registration": new Date('20-08-2030'),
        "capacity": 7
    },
    {
        "colour": "blue",
        "type": "carbio",
        "registration": new Date(),
        "capacity": 7
    },
    {
        "colour": "green",
        "type": "minivan",
        "registration": new Date(),
        "capacity": 7
    }    
]
car={...car,...cars}
console.log(car)
//console.log(car);
let o=[];
var updateObjectValue=(car,cars)=>{

   for(let i=0;i<cars.length;i++){
        let flag = true;
        for(let j=0;j<car.length;j++){
            if(car[j].colour == cars[i].colour && car[j].type != cars[i].type){
                  car[j] = cars[i];
                  flag = false;
                  break;
            }
        }
        if(flag){
            car.push(cars[i]);
        }
    }
    return car;
}  

  
      /*var destination =Object.assign({},car);
     console.log(destination,"=========================");
     Object.keys(cars).forEach(k=>{
        console.log(k,"------------------------------");
        if(k in destination.k.colour(cars)) {
             destination[k]=cars[k];
             o.push(destination[k]);
         }else{
               o.push(cars[k]);
         }
     })
     return o;

     console.log(updateObjectValue(car, cars));*/
     
     
     
     //destructing
     var [firstname, secondname]=["alpha","beta","gama","delta"];
     console.log(firstname);
     console.log(secondname);
     [firstname, secondname]=[secondname, firstname];
     console.log(firstname);
     console.log(secondname);