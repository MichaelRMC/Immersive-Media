const falso = require("@ngneat/falso")
const { nanoid } = require("nanoid");

function createRandomGame() {
  const game = {
    id: nanoid(4),
    name: `${chance.word()} ${chance.twitter()}`,
    priceInCents: falso.randFloat({min: 10, max: 70, fraction: 2}),
  };
  return console.log(game);
}
createRandomGame();
