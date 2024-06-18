/**
 * In JavaScript, the scope chain refers to the hierarchical order in which the runtime looks up variables and functions
 *  in the current execution context.

 
 */

let a = 10;
function x(){
    let b = 20;
    console.log({a});
    function y(){
        let c = 30;
        console.log({b})
        function z(){
            console.log({c})
    }z();   
}y();
}
x();