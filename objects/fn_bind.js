
/**
 * The bind() Method

The bind() method creates a new function with this set to a specific value. 
It returns a new function that we can call later. We can pass in the object we want to borrow the method from as the argument to bind(),
which will set this to that object.
 */

const details = {
    name: "Amrut",
    college: "SKSVMACET",
    printfn: function(){
    console.log(this.name)
    console.log(this.college)       
}
}

const details2 = {
    name:"Sekiro",
    college:"-_-",
}


const newprintfn = details.printfn.bind(details2)
newprintfn();