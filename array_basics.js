//initializig an array

//method 1
var fruits = ["Apple","Banana", "Mango"]
console.log(typeof(fruits));

//method 2
var vegetables = new Array("Chilli", "potato");
console.log(typeof(vegetables));

// Creates an array of 5 undefined elements
var house1 = new Array(5);

// Creates an array with element 1BHK
var home = new Array("1BHK");

//printing every element in array
console.log(fruits)

//printing ana element from specific index in array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
let i=0;

//printing elements using for loop
for(i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }

//printing elements using while loop
let j = 0;
while(j<fruits.length)
    {
        console.log(fruits[j])
        j++;
    }
