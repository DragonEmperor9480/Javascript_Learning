//creating array
let fruits = ["Apple", "Banana","Orange"];

console.log(typeof fruits);

//printing the array contents
console.log(fruits);

//printing array elements from a specific index
console.log(fruits[1]);

//Appending a new value to array
fruits.push("Cherry");
console.log(fruits);

//dropping the first element 
fruits.shift();
console.log(fruits);

//to print every element present in array with the help of loop
fruits.forEach(element =>{
    console.log(element)

});



