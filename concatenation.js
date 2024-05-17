let fName = "Amrut"
let age = "21"
let edu = "Engineering"

//Concatenation
let combined = "My Name is " + fName + " and my age is " + age +". i am studying "+ edu + ".";
console.log(combined) 

//Template Literal
let someTemplate = `My name is ${fName} and my age is ${age}. i am studying ${edu}.`
console.log(someTemplate)

// we can use next lines too for templates

let someTemplates = `My name is ${fName}
my age is ${age}. 
i am studying ${edu}.`
console.log(someTemplates)