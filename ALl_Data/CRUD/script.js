document.addEventListener("DOMContentLoaded",()=>{
console.log("Welcome")
const studentList = document.querySelector("#student-list")
const studentForm = document.querySelector(".add-student-form")
const addBtn = document.querySelector("#new-stu-btn")

let API = "https://642ac0e700dfa3b5474e28e3.mockapi.io/students"
console.log(API)

function ReadAllDatta(){ 
fetch(API,{
    method:"GET"
})
.then((response)=>response.json())
.then(((data)=>renderAllData(data)))
.catch(((err)=>console.log(err)))
}


//crate data

let newData = {
    name: "Dhiva FSD",
    batch: "B43WE",
    age: "24"
}

function CreateData(newData){

    fetch(API,{
        method : "POST",
        body : JSON.stringify(newData),
        headers : {
        "Content-type": "application/json ; charset=UTF-8"
        },
    })
    .then((response)=>response.json())
  .then(((data)=>renderStudent(data)))
  .catch(((err)=>console.log(err)))
}
//CreateData()

function EditData(){
    let editContent = {
        name : "Dhiva BE",
        batch : "B43WD"
    }
    fetch(`${API}/5`,{
        method:"PUT",
        body : JSON.stringify(editContent),
        headers : {
        "Content-type": "application/json ; charset=UTF-8"
        }
    })
    .then((response)=>response.json())
    .then(((data)=>console.log(data)))
    .catch(((err)=>console.log(err)))
}
//EditData()

function DeleteData(id , parent){
    fetch(`${API}/${id}`,{
        method: "DELETE",
        headers : {
            "Content-type": "application/json ; charset=UTF-8"
            }
    })
    .then(()=>parent.remove())
    .catch(((err)=>console.log(err)))
}
//DeleteData()


let addStudent = false;

addBtn.addEventListener("click",()=>{
 addStudent = !addStudent
 if(addStudent){
     studentForm.style.display = "block"
     addBtn.textContent = "Add and Close"
 }else{
    studentForm.style.display = "none"
    addBtn.textContent = "Add student"
 }
})

function renderStudent(stud){
    const studentDiv = document.createElement("div")
    studentDiv.className = "card"
    studentDiv.innerHTML +=`
    <h2>${stud.name}</h2>
    <p><span>Age : </span>${stud.age}<p>
    <p><span>Batch :</span>${stud.batch}<p>
    <button data-id="${stud.id}" class ="del-btn">Delete</button>
    `;

    studentList.appendChild(studentDiv)
}

function renderAllData(students){
    studentList.innerHTML += ""
    students.forEach((stud)=>{
        renderStudent(stud)
    })
}

studentList.addEventListener("click",(event)=>{
    event.preventDefault();
    if(event.target.className === "del-btn"){
        let id = event.target.dataset.id
        let parent = event.target.parentNode
       DeleteData(id, parent)
    
    }
})

studentForm.addEventListener("click",(event)=>{
    event.preventDefault()
    let name = document.getElementsByClassName("input-text")[0].value
    let batch = document.getElementsByClassName("input-text")[1].value
    let age = document.getElementsByClassName("input-text")[2].value
    let data = {
        name: name,
        batch:batch,
        age:age
    }
    if(event.target.name==="submit"){
        CreateData(data)
    }
})


ReadAllDatta()
})