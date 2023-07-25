var arr=["lol", "pop", "mom", "kok", "joj"];
arr.sort();
console.log(arr);


var cars=[
    {type:"volvo", year:"2016"},
    {type:"sabb", year:"2010"},
    {type:"BMW", year:"2020"}
    ]
    cars.sort(function(a,b){return a.year-b.year});
    console.log(cars);
    cars.sort(function(a,b){
        let x=a.type.toLowerCase();
        let y=b.type.toLowerCase();
        if(x<y) {return -1;}
        if(x>y) {return 1;}
        return 0;
    })
    console.log(cars);


var student=[
    {id:"3", name:"lol"},
    {id:"1", name:"pop"},
    {id:"4", name:"mom"}, 
    {id:"2", name:"kok"}
]
student.sort(function(a,b){return a.id-b.id});
console.log(student);

student.sort(function(a,b){
    let x=a.name.toUpperCase();
    let y=b.name.toUpperCase();
    if(x>y) {return -1;}
    if(x<y) {return 1;}
    return 0;
})
console.log(student);

const nums=[4,15,9,17,25];
let first=nums.findIndex(myfunction);
function myfunction(value, index, arr){
    return value > 100;
}
console.log(first);