const log = (param) => console.log(param)

const myResumeInside = ["Name", "Age","Email","Mobilenumber","Skills","Experiance" ]

log("..........JSON.........")

log("..........Object output.........")

const myResume = 
{
     Name : "Dhivakar",
     Age: 25,
     Email:"dhivu132@gmail.com", 
     MobileNumber: 9876543210,
     Experiance:"Fresher",
     PassedOut: 2020,
     LanguageKnown: "Tamil and English",
     AreaOfInterest: "Programming",
     Skills:"JavaScript, HTML, CSS, Java(Basics)",
     Degree: "Bachelor Of Engineering(Mechanical)",
     Education1:"Completed Diploma in Mechanical Engineering(Passed out 2017)",
     Education2:"Completed 10th and 12th on year of Passed out 2015",
     
}

console.log(myResume["Skills"]);

log("..........For Loop.........")
for (i=0;i<myResumeInside.length;i++){
    console.log(myResumeInside[i], i)
}

log("..........For each Loop.........")

myResumeInside.forEach ((value, index, array) => {
  console.log(value,index)  
});

log("..........For in Loop.........")

for (check in myResume){
    console.log(check, myResume[check])
}

log("..........For of Loop.........")

var string = "Dhivakar FSD"

for (check0 of string){
    console.log(check0)
}

