var games = ["Assassins creed", "GTA","Zombie Army", "Cyberpunk"]
let item;
for(item in games)
    {
        console.log(games[item]);
    }

let numbers = [10,20,30,40,50]
let total=0;
let nums;
for(nums in numbers)
    {
        total+=numbers[nums];
    }
    console.log(total);

let languages = {
    first: "C",
    Second: "C++",
    Third: "Java",
    fourth: "Python"
}
let i;
for( i in languages)
    {
        console.log(languages[i]);
    }