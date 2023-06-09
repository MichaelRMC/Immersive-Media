const chance = require('chance');
const { nanoid } = require( "nanoid" );
const {readJSONFile,
	writeJSONFile} = require("helpers.js")


const games = {
	id: nanoid(4),
	name: `${ chance.word() } ${ chance.twitter() }`,
	priceInCents: ( chance.dollar() * 100 ),

	misc: console.log( games.priceInCents )
}