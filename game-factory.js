const falso = require("@ngneat/falso");
const { nanoid } = require("nanoid");
const { generate_genre, consoles, gameSystem } = require("./data/games.js");
function createRandomGame() {
  const game = {
    id: nanoid(4),
    name: `${falso.randProductAdjective()} ${falso.randSuperheroName()}`,
    genre: generate_genre(),
    platform: gameSystem(consoles),
    priceInCents: falso.randFloat({ min: 10, max: 60, fraction: 2 }) * 100,
    inStock: falso.randBoolean(),
  };
  return game;
}

function randomGameFactory(number) {
  const games = [];
  for (let i = 0; i < number; i++) {
    games.push(createRandomGame());
  }
  return games;
}

module.exports = {
  createRandomGame,
  randomGameFactory,
};
