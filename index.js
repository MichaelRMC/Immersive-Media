const { createRandomGame, randomGameFactory } = require("./game-factory");
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
  let games = readJSONFile("./data", "games.json");
  console.log(games);
  if (process.argv[3]) {
    games.push(...randomGameFactory(process.argv[3]));
  } else {
    games.push(createRandomGame());
  }
  writeJSONFile("./data", "games.json", games);
}

run();