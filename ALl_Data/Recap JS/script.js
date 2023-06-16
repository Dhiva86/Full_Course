console.log("Recap React")

class student{
    name;
    age;

    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    isEligible(){
        if(this.age>18){
            return true
        }else{
            return false;
        }
    }


printDetails() {
    console.log("Student Details:");
    console.log(`Name:${this.name}`);
    console.log(`Age:${this.age}`);
    console.log(`Eligiblity: `,this.isEligible()? "Eligible":"Not Eligible")
    console.log(" ");
}
}

let student1 = new student("Dhivakar", 18)
let student2 = new student("Sarath", 24)

student1.printDetails()
student2.printDetails()