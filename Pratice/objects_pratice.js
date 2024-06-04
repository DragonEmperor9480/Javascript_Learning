let Game = {
    name: "Sekiro",
    Year: 2000,
    isFamous: true
};

console.log(Game);

//creating a function to update year

function updateyear(object, newyear)
{
    object.Year = newyear;
}

updateyear(Game, 2019);

console.log(Game);