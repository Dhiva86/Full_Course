
const log = (param) => console.log(param)

log("........Block Scoping.........")

function check(){
    let name = "Dhivakar";
    console.log(name);
}
check()

const namesArr = ["cricket", "badminton","vollyball","Swimming"]
console.log("Spread : ", ...namesArr)

function doing(...test){
    console.log("Rest : ", test)
}
doing("cricket", "badminton","vollyball")

log("........Object Destructuring.........")

const obj = {
    batch : "B43WE",
    gender : "Male",
    timing : "9 to 12",
}
const{batch,gender,timing}=obj

console.log("Batch = ", batch)

log("........Array Destructuring.........")

const array = ["dhiva", "ajith", "sarath"]

const [namer, ...namer1] =array

console.log(namer)
console.log(...namer1)

log("........MRF Function.........")

const arr = ["sanjay","arun","nagaraj"]

log("........Map Function.........")

const mapCheck = arr.map((value, index, accArr) => console.log("Value's from Array : ",value, index))

log("........Filter Function.........")

const filterCheck = arr.filter((value1,index1,accArr1) => value1!="sanjay")
console.log(filterCheck)
/* Given 4 numbers N,P,Q,R followed by N integers,find the maximum value of Pa[i]+Qa[j]+Ra[k](i<=j<=k).
Find the count k which represents number of times array A has been rotated. Given a number N followed 2 arrays A and B of length N.
Find the amount K by which the array has been rotated.*/

