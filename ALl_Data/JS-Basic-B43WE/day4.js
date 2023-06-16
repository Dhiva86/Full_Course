const log = (param) => console.log(param)

log("........JSON compare......")

let obj1 = {name :"Person 1", age:5}
let obj2 = {age:5,name :"Person 1"}

//JSON.stringify(obj1) === JSON.stringify(obj2)
//isEqual(obj1, obj2)
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue; 
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
   flag=false;
}
console.log(flag);

log("........Display Flag......")

let abc = new XMLHttpRequest();
console.log(abc);

abc.open("GET", "https://restcountries.com/v3.1/all");
abc.send();
abc.onload = function()

{    
    const data = JSON.parse(abc.response)
    console.log(data)  

  
}
