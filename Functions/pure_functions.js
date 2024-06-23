/**
 * A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
 * It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
 */

var a = 20;
function addition(b)
{
    return a+b;
}

console.log(addition(10));

//The above functioon is not a pure function as it is dependent on external variable.

// The Below function shows a pure function
function halfValue(c)
{
    return c/2;
}

console.log("Pure Function: ",halfValue(10));
