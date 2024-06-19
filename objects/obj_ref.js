/**
 * To copy an object in JavaScript, you have three options:

 Use the spread (...) syntax
 Use the Object.assign() method
 Use the JSON.stringify() and JSON.parse() methods
 */
const person = {
    fname: "Amrut",
    lname: "Naregal"
}

//method 1: Use the spread (...) syntax

const p1 = {
    ...person
}

//method 2: Use the Object.assign() method

let p2 = Object.assign({}, person);

//method 3: Use the JSON.stringify() and JSON.parse() methods

let p3 = JSON.parse(JSON.stringify(person));

console.log(person)
console.log(p1)
console.log(p2)
console.log(p3)

//shallow copy

let cars = {
    car1: "Lambo",
    car2: "Skoda",
    car3: "Supra"
}

let cars2 = cars;
console.log(cars)
console.log(cars2)

cars.cars2 = "Lambo";
console.log(cars)
console.log(cars2)

//deep copy

let bikes = {
    bike1: "Suzuki",
    bike2: "Pulsar",
    bike3: "Splendor"
}

let bikes2 = {
    ...bikes
}

console.log(bikes);
console.log(bikes2);

bikes2.bike3="Ninja";

console.log(bikes);
console.log(bikes2);