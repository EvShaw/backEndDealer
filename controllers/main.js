const Deck = require('../models/Deck')

module.exports = {
    getDecks: async (req, res) => {
        try {
            const deck = await Deck.find() 
            console.log(deck)

            console.log(deck.length)
            res.render('index.ejs', {deck: deck})
            
        } catch(err) {
            console.error(err)
        }
    },
}



