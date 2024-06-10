var numbers = [1,2,3,4,5,6,7,8,9,0];

//the below method will search from the beginning of array where "7" is the element t obe searched and "0" is from which index to start
//searching
console.log(numbers.includes(7,0));

//the below code output will be false as on 7th index 8 is there
console.log(numbers.includes(7,7));