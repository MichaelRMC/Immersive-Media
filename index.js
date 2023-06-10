const { writeJSONFile, readJSONFile } = require( "./helpers" );
const {
  create,
  destroy,
  update,
  index,
  show,
} = require("./src/game-controller");
const inform = console.log;

function run ()
{
  const action = process.argv[2];
  const game = process.argv[ 3 ];
  let games = readJSONFile("data", "games.json");
  let writeToFile = false;
  let updatedGameList = [];
  switch (action) {
    case "index":
      const quickView = index(games)
      inform(quickView);
      break;
    case "create":
      inform( "Action successful. Game added to the collection." );
      updatedGameList = create(games, game)
      writeToFile = true;
      break;
    case "show":
      const immersiveView = show(games, game)
      inform(immersiveView);
      break;
    case "update":
      updatedGameList = update(games, game, process.argv[ 4 ])
      writeToFile = true;
      break;
    case "destroy":
      updatedGameList = destroy(games, game)
      writeToFile = true;
      break;
    case "cart":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data", "games.json", updatedGameList);
  }
}
run();