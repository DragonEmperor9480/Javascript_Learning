/**
 * Similar to array destructuring, but with the ability to extract an object's properties (or keys) and their associated values
 *  rather than values from an array.
 * 
 * In object destructuring, keys rather than positions are used to extract data (or index).
 */

const details = {
    name: "Amrut",
    college: "SKSVMACET",
    yop: 2025
};

const {name, college, yop} = details;
console.log(name)
console.log(college)
console.log(yop)

/**
 * Object destructuring and default value

Similar to array destructuring, if the value unpacked from the object is undefined, 
a default value can be assigned to the variable. The example that follows should make it clear.
 */


const {a=1, b=2} = {a:10};
console.log(a)
console.log(b)

/**
 * Assigning new variable names

We can assign a variable with a different name than the property of the object. 
You can see the illustration for the same as follows:
 */

const names ={ a:"Amrut", b:"Naregal"}
const {a:firstName, b:lastName} = names;
console.log(firstName)
console.log(lastName)

/**
 * Rest operator
    We can store all of an object's remaining keys in a new object variable by using the remainder operator (...) 
    during object destructuring.
 */

const {x, ...rest} = {x:10, y:20, z:30};
console.log(x)
console.log(rest)