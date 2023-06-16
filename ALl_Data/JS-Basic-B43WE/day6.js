console.log("Working Fine")

//First letter uppercase
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
 }
})(arr)

//Print all odd number
var arrNum = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
 (function(arrNum) {
 for (var i = 0; i < arrNum.length; i++) {
 if (arrNum[i] % 2!= 0) {
 console.log(arrNum[i]);
 }}
})(arrNum)//([1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4]);

//Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var newString = "";
 
for (var i = 0; i < numsArr.length; i++) {
 newString += numsArr[i] 
}
console.log(newString);

//Print even value
var numArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numArr.length; i++) {
 if(numArr[i] %2 === 0 )
 {
 console.log("even", numArr[i])
 }
}

