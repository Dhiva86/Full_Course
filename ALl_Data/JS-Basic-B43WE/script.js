console.log("Hi i am ready to FSD")

var a = 45;
var b = a;
 var b = 7;
console.log(a);
console.log(b);

var objA = {value : 15}

var objB = objA

console.log(objB)

objB.value++

console.log(objA)

// (function(array){
//     var sum = 0;
//          for(var i = 0 ; i< array.length ; i++){
//             sum = sum + array[i];
//           }
//           return sum;
//     })([1,2,3,4])
// let array=[1, 2, 3, 4,5]

//     function arrA(array){
//         let sum = 0;
//         for(let i = 0 ; i<array.array; i++){
//            sum = sum + array[i];
//          }
//          return sum;
//       } arrA()
let array=[1, 2, 3, 4,5];
sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
console.log(sum(array))


