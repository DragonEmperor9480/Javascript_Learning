// A closure is a function that remembers its outer variable and can access them .
function x(){
    let a = 10;
    return function y(){
        console.log({a})
    }
}

const z = x();
z();