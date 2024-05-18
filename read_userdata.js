//install readline sync
//command: npm install readline-sync

//initialize the module
const scn = require("readline-sync");
const userName = scn.question("Enter your Name: ");
console.log(`Hello, ${userName}`);