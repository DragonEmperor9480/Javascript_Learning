/**
 * Write a program that checks age and tells adult or child
 */

const scn = require("readline-sync");
const age = scn.question("Enter Age: ");
console.log(age >=18 ? "Adult" : "Child");
