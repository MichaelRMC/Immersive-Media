const names = {
  adjectives: [
    "Rogue",
    "Casual",
    "Fantasy",
    "Space",
    "Stealthy",
    "Dystopian",
    "First-Person",
    "Bullet-Hell",
    "Musical",
    "Procedurally-Generated",
    "Pretentious",
    "Arty",
    "Social",
    "Political",
    "Tactical",
    "Open-world",
  ],
  nouns: [
    "Star",
    "Fish",
    "Golf",
    "Maze",
    "Frog",
    "Football",
    "Airplane",
    "Superhero",
    "Crime",
    "Police",
    "Surgery",
    "Candy",
    "Murder Mystery",
    "Cookery",
    "Midwife",
    "Sandbox",
  ],
  genres: [
    "Racing",
    "MMO",
    "Sports",
    "RPG",
    "Adventure",
    "Fighting",
    "Combat",
    "Shooter",
    "Fantasy",
    "Platformer",
    "Horror",
    "Survival",
    "Simulator",
    "Saga",
    "Puzzler",
    "Strategy",
    "Roguelike",
  ],
};

function genreMatch() {
  return (
    names.adjectives[Math.floor(Math.random() * names.adjectives.length)] +
    " " +
    names.nouns[Math.floor(Math.random() * names.nouns.length)] +
    " " +
    names.genres[Math.floor(Math.random() * names.genres.length)]
  );
}

const consoles = [
  "PS5",
  "PS4",
  "PS3",
  "Xbox 360",
  "Xbox One",
  "Xbox Series X/S",
  "Nintendo Switch",
  "Nintendo Wii",
  "Nintendo Gamecube",
];
function gameSystem(consoles) {
  return consoles[Math.floor(Math.random() * consoles.length)];
}

module.exports = {
  genreMatch,
  consoles,
  gameSystem,
};
