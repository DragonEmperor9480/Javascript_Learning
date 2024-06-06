/**
 *  We can use the iteration method for many use cases like to find a character in string.
 *  Count any number of characters in a string etc
 */

let anime = "Demon Slayer";
let count=0;

for(let char of anime)
    {
        if(char === 'e')
            count++;
    }
console.log(count);