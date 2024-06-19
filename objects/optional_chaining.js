//The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.

let Anime = {
    anime1: "Demon Slayer",
    anime2: "Attack on titan",
    anime3: "Dr. Stone"
}

console.log(Anime.anime1);
console.log(Anime.anime2);
console.log(Anime?.anime3);
console.log(Anime?.anime4);