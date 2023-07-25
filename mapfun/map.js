function mapp1(){
    const arr1=[1, 4, 6, 8];
    const map1=arr1.map(x=>x*2);
    console.log(map1);
}
mapp1()

function map2(){
    const number=[1,4,9];
    const roots=number.map((num)=>Math.sqrt(num));
    console.log(roots);
}
map2()

function map3(){
    const kvarr=[
        {key: 1, value: 10},
        {key: 2, value: 20},
        {key: 3, value: 30}
    ]
    const reformattedarr=kvarr.map(({key,value})=>({[key]:value}));
    console.log(reformattedarr);
}
map3()

function map4(){
    const arrlike={
        length:4,
        0:2,
        1:3,
        2:4,
        3:5
    }
    console.log(Array.prototype.map.call(arrlike, (x)=>x**2))
}
map4()

function map5(){
    const elems=document.querySelectorAll("select option:checked");
    const values=Array.prototype.map.call(elems,({value})=>value)
}
map4()

function map6(){
    arr=["1", "2", "3", "4"].map(parseInt);
}
map6()

function map7(){
    const strs=["10", "10", "10"]
    const nums=strs.map(parseInt)
    console.log(nums);
}
map7()

function map8(){
    const nums=[1, 2, 3, 4]
    const filterednums=nums.map((num, index) => {
        if(index<2){
            return num;
        }
    })
    filteredarr=filterednums.filter(function(element){
       return element!==undefined;
    })
        console.log(filteredarr);
} 
map8()

function map9(){
    const names=["pop", "lol", "kok", "mom", "non"]
    const filterdnames=names.filter((name, index)=>{
        if(index<3){
            return name;
        }
    })
    //filteredarr=filterdnames.filter(function(element){
      //  return element!==undefined;
    //})
    console.log(filterdnames);
}
map9()

function map10(){
    var pets=["dog", "chicken", "cat", "chicken", "dog", "rat","chicken"]
    var petCount=pets.reduce(function(index, pet){
        if(!index[pet]){
            index[pet]=1;
        }
        else{
            index[pet]++;
        }
        return index;
    },{})
    console.log(petCount);
}
map10()