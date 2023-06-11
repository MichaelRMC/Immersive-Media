// @ts-nocheck
const { writeJSONFile, readJSONFile } = require( "./helpers" );
const {
  create,
  destroy,
  update,
  index,
  show,
  addCart,
  cancelCart,
} = require( "./src/game-controller" );

const inform = console.log;

function run ()
{
  const action = process.argv[2];
  const game = process.argv[ 3 ];
  let games = readJSONFile( "data", "games.json" );
  let cart = readJSONFile( "data", "cart.json" ); 
  let writeToFile = false;
  let updatedGameList = [];
  let iMediaCart = []
  switch (action) {
    case "index":
      const quickView = index(games);
      inform(quickView);
      break;
    case "create":
      inform("Game added to the collection.");
      updatedGameList = create(games, game);
      writeToFile = true;
      break;
    case "show":
      const immersiveView = show(games, game);
      inform(immersiveView);
      break;
    case "update":
      updatedGameList = update(games, game, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedGameList = destroy(games, game);
      writeToFile = true;
      break;
    case "addCart":
      iMediaCart = addCart( games, cart, process.argv[ 4 ] );
      writeToFile = true;
      inform("Game added to cart.");
      break;
    case "cancelCart":
      iMediaCart = cancelCart( games, cart, process.argv[ 4 ] );
      writeToFile = true;
      inform("Game removed from cart.");
      break;
    default:
      inform("There was an error.");
  }
  if(writeToFile) {
    writeJSONFile("data", "games.json", updatedGameList);
  } 
  if ( writeToFile && "addCart" || writeToFile && "cancelCart" )
  {
    writeJSONFile( "data", "cart.json", iMediaCart )
  }
}
run();