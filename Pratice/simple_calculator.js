const scn = require("readline-sync");
const value_1 = parseInt(scn.question("Enter Value 1"));
const value_2 = parseInt(scn.question("Enter Value 2"));
const op = scn.question("Enter the Operator ");
var a = parseInt(a);
var b = parseInt(b);
switch(op)
{
    case '+': console.log(value_1+value_2);break;
    case '-': console.log(value_1-value_2);break;
    case '*': console.log(value_1*value_2);break;
    case '/': console.log(value_1/value_2);break;
    case '%': console.log(value_1%value_2);break;
    default:console.log("Invalid Input")
}

