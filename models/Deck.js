const mongoose = require('mongoose')

// console.log(deck)



const DeckSchema = new mongoose.Schema({
   type: String, //full or short
   cardCount: Number, //52 cards if full deck
   shuffled: Boolean, // true = shuffled / false = in order
   openDeck: Boolean,
   deckOfCards: Array,
   hand: Array,
   createdAt: {
      type: Date,
      default: Date.now,
   },
})


module.exports = mongoose.model('Deck', DeckSchema)

