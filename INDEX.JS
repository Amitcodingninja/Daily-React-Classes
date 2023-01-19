// let arr =[1,2,3];
// const dblArr=arr.map(function(num)){
//     return num*2;
// });

// 1) 
// function map(arr, fn) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

// var numbers = [1, 2, 3, 4, 5];
// var squaredNumbers = map(numbers, function(x) { return x * x; });
// console.log(squaredNumbers); 

// 2)

// Q2. write use cases + any one code example for map, filter and reduce.

var numbers = [1, 2, 3, 4, 5];
var strings = numbers.map(function(x) { return x.toString(); });
console.log(strings); 


var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter(function(x) { return x % 2 === 0; });
console.log(evenNumbers); // [2, 4, 6]


var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(a, b) { return a + b; }, 0);
console.log(sum); // 15