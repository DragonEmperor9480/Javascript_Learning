/**
 * Program to identify a number is prime or not using JS
 */

const scn = require("readline-sync");
const numb = scn.question("Enter a number: \n");
var flag=0;
for(i=1;i<=numb;i++)
    {
        if (numb%i==0)
            flag++;
    }

console.log(flag);

if(flag==2)
    console.log(`${numb} is prime Number`);
else
console.log(`${numb} is not prime Number`);
    