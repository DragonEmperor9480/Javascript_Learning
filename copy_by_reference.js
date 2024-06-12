let arr = [1,2,3,4,5]
let arr2 = arr;
console.log(arr);
console.log(arr2);

arr.push(6)

console.log(arr);
console.log(arr2);
//here it will clone the new element in arr2 even though it was not necessary so fix it we use spread operator
// thhe following aboove method is also called shallow copy


 arr = [1,2,3,4,5]
 arr2 = [...arr];
console.log(arr);
console.log(arr2);

arr.push(6)

console.log(arr);
console.log(arr2);