const { writeJSONFile, readJSONFile } = require("./helpers");
const chalk = require("chalk");
const {
  create,
  destroy,
  update,
  index,
  show,
  filterByPlatform,
  addCart,
  cancelCart,
} = require("./src/game-controller");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const game = process.argv[3];
  let games = readJSONFile("./data/", "games.json");
  let cart = readJSONFile("./data", "cart.json");
  let updatingGameInventory = false;
  let sendToCart = false;
  let updatedGameList = [];
  let iMediaCart = [];
  switch (action) {
    case "index":
      const quickView = index(games);
      inform(quickView);
      break;
    case "create":
      inform(chalk.green("Game added to the collection."));
      updatedGameList = create(games, game);
      updatingGameInventory = true;
      break;
    case "show":
      const immersiveView = show(games, game);
      inform(immersiveView);
      break;
    case "update":
      updatedGameList = update(games, game, process.argv[4]);
      updatingGameInventory = true;
      inform(updatedGameList);
      break;
    case "destroy":
      updatedGameList = destroy(games, game);
      updatingGameInventory = true;
      break;
    case "filterPlatform":
      const platformResults = filterByPlatform(games, game) 
      inform(platformResults);
      break;
    case "addCart":
      iMediaCart = addCart(games, cart, process.argv[4]);
      sendToCart = true;
      inform(chalk.greenBright("Game added to cart."));
      break;
    case "cancelCart":
      iMediaCart = cancelCart(games, cart, process.argv[4]);
      sendToCart = true;
      inform(chalk.redBright("Game removed from cart."));
      break;
    default:
      inform(chalk.bgRed.underline.blackBright("There was an error."));

      if (updatingGameInventory) {
        writeJSONFile("./data", "games.json", updatedGameList);
      }
      if (sendToCart) {
        writeJSONFile("./data", "cart.json", iMediaCart);
      }
  }
}
run();
