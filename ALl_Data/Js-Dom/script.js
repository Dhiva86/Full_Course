console.log("I am Coming!!!")

let create = document.createElement("span")

create.setAttribute("class1" , "New-dom")

let builed = document.getElementById("Newton")


let query = document.querySelector('.query')

query.style.color = "blue"

let query2 = document.querySelectorAll('.query')
const colors = ["red", "green", "yellow", "brown"]

for (let i=0;i<query2.length;i++){
    console.log(query2[i])
    query2[i].style.backgroundColor = colors[i]
}
create.innerHTML += `<h1> New one </h1> 
<p>Its time to progress</p>`

console.log(create)

console.log(query)

console.log(builed)

console.log(create)
document.body.append(create)