const mongoose = require('mongoose')

const deckOfCardsSchema = new mongoose.Schema({
   type: String, //full or short
   totalCards: Number, //62 for full, 32 for short
   shuffled: String, //shuffled - yes - mixed order, 
   // cards:
})


const DeckSchema = new mongoose.Schema({
   Type: String, //full or short
   cardCount: Number, //52 cards if full deck
   shuffled: Boolean, // true = shuffled / false = in order
   createdAt: {
      type: Date,
      default: Date.now,
    },
   // deckCards: deckOfCardsSchema,
})


module.exports = mongoose.model('Deck', DeckSchema)

