const falso = require("@ngneat/falso");
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const games = require("../data/games.json");
const {
  genreMatch,
  consoles,
  gameSystem,
} = require("../data/gameGenreAndPlatfromDatabase");

const inform = console.log;

function create(games, gameName) {
  const game = {
    id: nanoid(4),
    name: gameName,
    genre: genreMatch(),
    platform: gameSystem(consoles),
    priceInCents: falso.randFloat({ min: 10, max: 60, fraction: 2 }) * 100,
  };
  games.push(game);
  return games;
}

function index(games) {
  return games.map((game) => `id: ${game.id} Name: ${game.name}`);
}

function show(games, gameId) {
  let game = games.find((game) => game.id === gameId);
  let immersiveView = Object.assign({}, game);
  return immersiveView;
}

function destroy(games, gameId) {
  const index = games.findIndex((game) => game.id === gameId);
  if (index > -1) {
    games.splice(index, 1);
    inform(
      chalk.rgb(255, 0, 0).italic("Game successfully removed from collection")
    );
    return games;
  } else {
    inform(chalk.bgAnsi256(227).italic("Game not found. No action taken"));
    return games;
  }
}

function update(games, gameId, gamePlatform) {
  const index = games.findIndex((game) => game.id === gameId);
  if (index > -1) {
    games[index].id = gameId;
    games[index].platform = gamePlatform;
    inform(chalk.hex("#00ffb7").bold("Game successfully updated"));
    return games;
  } else {
    inform(chalk.hex("#ff6200").bold("Game not found."));
    return games;
  }
}

function filterByPlatform(games, gamePlatform) {
  let result = games.filter((game) => game.platform === gamePlatform);
  return result;
}

function addCart(games, gameName, gameCart) {
  gameCart = {};
  const gameInCart = games.find((game) => games.includes(gameName) ===  game.name);
  gameCart.immersiveTotal = [ itemTotal = 1, cartTotal = gameInCart.priceInCents];
  return gameCart.splice(0, 0, gameInCart, immersiveTotal);
}
function cancelCart(games, gameName, gameCart) {}

module.exports = {
  create,
  index,
  show,
  destroy,
  update,
  filterByPlatform,
  addCart,
  cancelCart,
};
