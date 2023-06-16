

// first class function

function valueAssign (num){
 return(num + 10)
}

function displyAbove (ADD){
    console.log("Showing value of Added", ADD(55))
}
displyAbove(valueAssign)

const log = (param) => console.log(param)

log("........for lopping concepts.........")

const brothers = ["dhiva","ajith","sarath"]

for (let m=0;m<brothers.length;m++){
    console.log(brothers[m], m)
}

const cricket =
{
    name : "rohit",
    age : 40,
    century : 28,
    captain : "For india",
}
console.log(cricket["century"])

const cricketKeys = Object.keys(cricket)
console.log("Here keys are : ", cricketKeys)

const cricketValues = Object.values(cricket)
console.log("Here values are : ", cricketValues)

for (let i=0;i<cricketKeys.length;i++){
    console.log(cricketKeys[i], cricket[cricketKeys[i]])
}

for (let i=0;i<cricketValues.length;i++){
    console.log(cricketValues[i], cricket[cricketValues[i]])
}

log("..........For each.........")

brothers.forEach ((val, ind, asd ) => {
    console.log(val, ind, asd )
})
log("..........For in.........")

for (obj in cricket){
    console.log(obj, cricket[obj])
}

