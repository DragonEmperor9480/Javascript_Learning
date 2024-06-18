//A Higher-Order function is a function that receives a function as an argument or returns function as output. 


function fn1(){
    return "Hello";
}

function fn2(fn, name){
    console.log(fn(),",",name);
}

fn2(fn1, "Amrut");

//Example 2
function fn3(){
    return function(){
        console.log("Hello");
    }
}

const fn4=fn3();
fn4();
