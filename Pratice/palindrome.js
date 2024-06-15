const scn = require('readline-sync');
let somestr = scn.question("Enter a string");
let revstr = somestr.split("").reverse().join("");
if(somestr === revstr)
    console.log(`${somestr} is palindrome`);
else
    console.log(`${somestr} is not palindrome`);