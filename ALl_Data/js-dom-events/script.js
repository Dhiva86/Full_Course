console.log("Working Awsome")

//alert
let promtElemnt = document.querySelector("#promt-element")

function alertFync(){
   let name = alert("Confirm your Name")
}
//alertFync()
//prompt

function promptFunc(){
    let name2 = prompt("Enter Your Name", "default")
    console.log(name2)
    promtElemnt.textContent = `Your name is ${name2}`

}
//promptFunc()
//confrim

function confirmFun(){
    let name3 = confirm("Please Confirm Again")
    //console.log(name3)
    promtElemnt.textContent = `Your response is ${name3}`
    
}
//confirmFun()


let timeElement = document.querySelector("#time-element")
let count = 10;
function countDown(){
    timeElement.textContent = count
    count--
    const id = setTimeout(countDown, 1000)
    if(count == 0){
        clearTimeout(id)
        timeElement.textContent = "Time's Up"
    }
    
}
//countDown()
// console.log("45")
//setTimeout(timeOut, 5000)
// console.log("10")
// console.log("63")

let timeIntervel = document.querySelector("#time-intervel")
let intervelCount = 0
function intervelFuc(){
    const id = setInterval(()=>{
        timeIntervel.textContent = intervelCount
        intervelCount ++  
        if(intervelCount == 10){
            clearInterval(id)
            timeIntervel.textContent = "Times Gone"
        }
    },1000)
   
}
//intervelFuc()

let click_btn = document.querySelector("#event-click")
function clickedButton(){
    console.log("clicked the button")
}
//add event listioner

let addEventBtn = document.querySelector("#add-event")

addEventBtn.addEventListener("click", ()=>{
  console.log("add event button clicked")
})