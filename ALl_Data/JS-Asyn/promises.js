const log =(param)=>console.log(param)
log("Go on")


let cricketWinning = 85;
//Producer
let winningMoment = new Promise(
   
    (resolve, reject)=>{
        setTimeout(()=>{
        if(cricketWinning>75){
            resolve("You are Selected to Qualify")
        }else{
            reject("You are not selected")
        } }, 4000)
    }
)
//consumer
winningMoment
.then((success)=>log(success))
.catch((failed)=>log(failed))

//Chaing

let chaingTask = new Promise(
       (resolve,reject)=>{
           setTimeout(()=>{
               resolve(45)
           },2000)
       }
)
chaingTask.then((val1)=>{
    log(`val1:${val1}`)
    return val1*2
}).then((val2)=>{
    log(`val2:${val2}`)
    return val2*2
}).then((val3)=>{
    log(`val1:${val3}`)
})

//Promoise all
let promiseOne = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            log("Promis one")
            reject(45)
        },2000)
    }
)
let promiseTwo = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            log("Promis Two")
            resolve(45)
        },4000)
    }
)

let promiseThree = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            log("Promis Three")
            resolve(45)
        },6000)
    }
)

Promise.all([promiseOne,promiseTwo,promiseThree])
.then((value)=>{
    log(`The resolved value: ${value}`)
})
.catch((valueTwo)=>{
    log(`Errored Occured: ${valueTwo}`)
})
//get in order- name- age - vrified

function getName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(name.length==0){
            reject("Pass a valid Name")
        }else{
            resolve(name)
        }
    },10000)
    })
}
function getAge(name){
   log(`Hi ${name} please enter the age`)
}
function verifiedNameAndAge(name, age){
    setTimeout(()=>{ 
    log(`Hi ${name} got your age is ${age}`)
},12000)
}

getName("Dhivakar")
.then((gettedName)=>{log(`You entered the Name is ${gettedName}`)
       return gettedName
})
.then((gettingAge)=>{getAge(gettingAge)
     return gettingAge
})
.then((gettingData)=>verifiedNameAndAge(gettingData,25))
.catch((error)=>log(error))

//Fetch data

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    data.forEach(element => {
        const createCuntryObject = {
            ...element,
            name:element.name.common,
            flags:element.flags.png,
            population:element.population,
            region:element.region,
            capital:element.capital
        }
      createCuntry(createCuntryObject)
    })
})
.catch((error)=>log(error))

function createCuntry({name,flags,population,region,capital}){
    document.body.innerHTML += `
    <div class="container">
    <img src="${flags}" alt="${name}" class="flag"/>
    <div class="info">
    <h2>${name}</h2>
    <p><span>Population: ${population}</span></P>
    <p><span>Region: ${region}</span></P>
    <p><span>Capital: ${capital}</span></P>
    </div>
    </div>
    `
}

