/**
 * In JavaScript, includes() method determines whether a string contains the given characters within it or not. 
 * This method returns true if the string contains the characters, otherwise, it returns false. 
 * 
 * Note: The includes() method is case sensitive i.e, it will treat the Uppercase characters and Lowercase characters differently.
 * 
 * Syntax:  
    string.includes(searchvalue, start)

 */

let assassin = "Arno Dorian";
console.log(assassin.includes("Arno"));

console.log(assassin.includes("arno"));

if(assassin.includes("arno"))
    console.log("Available");
else
    console.log("Not Available");