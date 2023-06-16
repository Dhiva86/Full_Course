console.log("Started")

let fruit = ["orange", "apple", "mango"]
let veg = ["carrot", "beetroot", "califlower"]

let tray = [
    "brocali",
    "bomagran",
    ...fruit,
    ...veg
]
console.log(tray)
//rest operator

let [seconditem,...rest] = tray
console.log(seconditem)
console.log(rest)