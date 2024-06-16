function remove_vowels(str){
    let i;
    let result="";
    const vowels = ["a","e","i","o","u"];
    for( let char of str)
        {

            if (!vowels.includes(char))
                {
                    result+=char;
                }
        }
        return result;
}
somestr = "hello";
console.log(remove_vowels(somestr))