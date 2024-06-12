let arr = [1,2,3];
let arr2 = [4,5];

let arr3 = arr.concat(arr2);

console.log(arr3);

let arr4 = ['a','b','c']
let arr5 = [arr4,'d','e']
console.log(arr5) // it will put array inside an array so to fix it we use the following below mwthod

let arr6 = [...arr4,'d','e']
console.log(arr6);

//some maths operations
console.log(Math.min(1,2,3,4,0));
console.log(Math.max(1,2,3,4,5,0));