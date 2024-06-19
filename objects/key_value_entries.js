//We have 3 different Methods that we can apply to Objects to make our life easier.


const person = {
    name: "Amrut",
    college: "SKSVMACET",
    yop: 2025
};

//  1) Object.entries(): returns an array containing sub-arrays that contain Key-value pair from the Original Object.


const entries = Object.entries(person);
console.log(entries);

// 2) Object.keys(): this method returns an array containing all the keys of an Object.

const keys = Object.keys(person);
console.log(keys);

// 3) Object.values(): this method returns an array containing all the values of an Object.

const values = Object.values(person);
console.log(values);