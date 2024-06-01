/**
 * Greatest of two numbers
 */

const scn = require("readline-sync")
const a = scn.questionInt("Enter 1st number:");
const b = scn.questionInt("Enter 2nd Number:");

function max(num1,num2){
    return num1>num2 ? num1: num2;
}

console.log(max(a,b))