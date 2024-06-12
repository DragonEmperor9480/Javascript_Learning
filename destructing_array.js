var fruits = ["Apple","Banana","Chickoo","Guava","Papaya"]
var [first,Second] = fruits;

console.log(first);
console.log(Second);

var [first,,Second] = fruits;

console.log(first);
console.log(Second);

var [first,,,Second] = fruits;

console.log(first);
console.log(Second);

var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
 
console.log(x);
console.log(y);
console.log(z);