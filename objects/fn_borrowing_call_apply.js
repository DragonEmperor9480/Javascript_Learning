const details = {
    name: "Amrut",
    college: "SKSVMACET",
    printfn: function(){
    console.log(this.name)
    console.log(this.college)       
}
}

details.printfn()

const details2 = {
    name:"Sekiro",
    college:"-_-",
}
/**
 * The call() method allows us to call a function and specify the value of this explicitly. 
 * We can pass in the object we want to borrow the method from as the first argument to call(), 
 * which will set this to that object. Any additional arguments will be passed to the function as parameters.
 */


details.printfn.call(details2)

/**
 * The apply() method is similar to call(), but it accepts an array of arguments instead of individual arguments. 
 * This can be useful when you have a dynamic number of arguments to pass to the function.
 */
details.printfn.apply(details2)