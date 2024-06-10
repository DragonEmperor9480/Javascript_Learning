var games = []
console.log(typeof(games));
console.log(games);

//pushing a single element
games.push("Assassins creed");
console.log(games);

//pushing multiple elements
games.push("Clash of clans", "Genshin Impact")
console.log(games);

//we can use games.pop() to drop last element
games.pop();
console.log(games);

//slicing of array
var numbers = [1,2,3,4,5,6,7,8,9,0];
var numbers2 = numbers.slice(5,9);
console.log(numbers);
console.log(numbers2);