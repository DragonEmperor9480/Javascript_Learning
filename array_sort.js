var Characters = ["Ayato","Zhongli","Ayaka","Shinobu","Nahida","Venti","Jean"]
console.log(Characters.sort());


/**
 * example, we use the sort() method on the array of numbers & observe some unexpected behavior.

let numbers = [20,5.2,-120,100,30,0]
console.log(numbers.sort())
Output:

-120,0,100,20,30,5.2
Our output should be -120, 0, 5.2, 20, 30, 100 but it’s not so, why? Because as we apply the direct sort() method, it would process accordingly: 100 would be placed before 20, as ‘2’ is larger than ‘1’, and similarly in the case of 30 & 5.2,  as ‘5’ is larger than ‘3’ thus, 30 would be placed before 5.2. We can resolve this unexpected error by using the sort() method for numerics using the following compare function: 

let numbers = [20,5.2,-120,100,30,0];

/* Logic: 
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.

function compare(a,b){
    return a-b;
}
console.log(numbers.sort(compare));
Output:

-120,0,5.2,20,30,100
 */
var numbers = [1,2,11,15,12,45,32,3,4,5,6,7,8,9,0];
console.log(numbers);
function compare(a,b){
    return a-b;
}

console.log(numbers.sort(compare));