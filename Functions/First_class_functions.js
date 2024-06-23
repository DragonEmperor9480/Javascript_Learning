/**
 * First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. 
 * So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. 
 * JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.
 */

const Calculator = {
    add: (a, b) => a + b,
    sub: (a, b) =>
        {
            return a - b;
        }
        } 

console.log(Calculator.add(5, 5));
console.log(Calculator.sub(5, 5));