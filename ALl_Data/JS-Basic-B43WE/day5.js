
const log = (param) => console.log(param)

log(".........Anonymous,IIFE and Arrow Odd Number............")

let array=[1,1, 2, 3, 4,5]
function arr(array){
   for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
 }
 //arr()
 (function(array){
   for(var i = 0 ; i< array.length ; i++){
              if(array[i]%2!=0){
                 console.log(array[i])
              } 
         }
   })
   //([1,2,3,4])
   oddNumbers = (array) => {
      for(var i = 0 ; i< array.length; i++){
           if(array[i]%2!=0){
              console.log(array[i])
           } 
      }
           }
           //oddNumbers(array)


log(".........Anonymous,IIFE and Arrow Sum of all Numbers............")  
let array2=[11,22,33]
function arrA(array2){
   var sum = 0;
   for(var i = 0 ; i<array2.length; i++){
      sum = sum + array2[i];
    }
    return sum;
 } 
 //arrA()

 (function(array){
   var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
         }
         return sum;
   })//([1,2,3,4])
   sum = (array)=>{
      var sum = 0;
           for(var i = 0 ; i< array.length ; i++){
              sum = sum + array[i];
            }
            return sum;
            }
  console.log(sum(array))


  log(".........Anonymous,IIFE and Arrow Return all the prime Numbers............") 
  let numArray = [1,5,3,8,9,10]
  function arrNum(numArray){
   numArray = numArray.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0) 
       return false;
     }
     return true;
   });
   console.log(arrNum(numArray));
  }
   //arrNum(numArray)

   primeNumber = (numArray) => {
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) 
          return false;
        }
        return true;
      });
      console.log(numArray());
  }


  log(".........Anonymous and IIFE Remove duplicates from an Array............") 
  
  function dupl(array){
   let dup = [...new Set(array)];
   console.log(dup);
 }//dupl(array)

 (function(array){
   let dup = [...new Set(array)];
   console.log(dup);
  })([1,1,2,3,4])
  
 
