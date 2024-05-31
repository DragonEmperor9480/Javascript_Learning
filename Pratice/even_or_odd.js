const scn = require("readline-sync");
const a = scn.question("Enter A Number");

if (a%2==0)
    {
        console.log(`${a} is a Even number`)
    }
else
    {
        console.log(`${a} is a odd number`);
    }