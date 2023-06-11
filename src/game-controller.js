const falso = require("@ngneat/falso");
const { nanoid } = require("nanoid");
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
    inform("Game successfully removed from collection");
    return games;
  } else {
    inform("Game not found. No action taken");
    return games;
  }
}

function update(games, gameId, gamePlatform) {
  const index = games.findIndex((game) => game.id === gameId);
  if (index > -1) {
    games[index].id = gameId;
    games[index].platform = gamePlatform;
    inform("Game successfully updated");
    return games;
  } else {
    inform("Game not found. No action taken");
    return games;
  }
}

function addCart(games,game, gameName, ) {
  const gameInCart = games.find((game) => game.name === gameName);
    let gameCart = Object.create({}, gameInCart)
    gameCart.itemTotal += 1;
    gameCart.cartTotal += games.priceInCents;
  return console.log(gameCart);
};
function cancelCart(games, gameName,gameCart) {}

module.exports = {
  create,
  index,
  show,
  destroy,
  update,
  addCart,
  cancelCart,
};
