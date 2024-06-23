/**
 *Anonymus Functions 
 */


//Method 1
var a = function(){
    console.log("Hello World!");
}
a();

//Method 2
var b = function(c)
{
console.log(`Hello, ${c}`);
}

b("Amrut");

//Method 3
setTimeout(function(){
    console.log("Naruto");
},800);

//Method 4
(function(){
    console.log("Demon Slayer!");
})();

//Method 5 
var meow = ()=>
    {
        console.log("Cat!");
    }

    meow();