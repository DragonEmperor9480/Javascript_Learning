//Nullish coscaling
/*
    This operator returns right hand value if the left hand value is null or undefined
    if not null then it will return the left hand value
*/

let a = "Javascript"
console.log(a ?? "No input");

let b;
console.log(b ?? "No value");

var c = null;
console.log(c ?? "C is null")