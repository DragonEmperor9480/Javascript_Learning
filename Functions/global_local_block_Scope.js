/**
 * We generally have three types of scope 
1) Global Scope
2) Local Scope 
3) Block Scope 
 */

//Global Scope
let x = "Ayato";
function hello()
{
    console.log(x);
}
hello();

/**
 * Variable x is written in the top-level code so it is global scope and javaScript has this concept that even inside a hello function x 
 * is not declared but it is still able to console the value of x from inside the function as the variable x is global Scope and this is 
 * how it works in Javascript.
 */

//Local Scope
let y = "Ayato";
function hello1()
{
    let z = "Amrut";
    console.log(y);
    console.log(z);
}
hello1();

/**
 * Inside Function hello(), variable y is local Scope as it can only be accessed within the function, 
 * if you try to access it outside the function it will show a syntax error that y is not declared.
 * Even if We use let and const variable declaration, Global and Local variable concepts will work the same way.
 */

/**
 * Global Scope - visibility all over the javascript Code 
 * Block Scope  - visibility only inside a piece of code generally wrapped by curly braces 
 */

//let and const declared variables are Block Scope
//var is either global scoped or function scoped

// {
//     let a = 10 ;
//     let b = 20 ;
//    }
   
//    console.log(a);
//    console.log(b);

//The above code will give error

{
    var a = 10 ;
    var b = 20 ;
   }
   
   console.log(a);
   console.log(b);
//    function hello() {
//     var c = 100 ;
//     var d = 200 ;
//    }
   
//    console.log(c);
//    console.log(d);

//The Above code will also give error.