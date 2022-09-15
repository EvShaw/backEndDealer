const Deck = require('../models/Deck')


module.exports = {
    getDecks: async (req, res) => {
        try {
            const deck = await Deck.find()
            res.render('decks.ejs', { deck: deck })

        } catch (err) {
            console.error(err)
        }
    },
    createDeck: async (req, res) => {
        try {
            await Deck.create({
                Type: 'full',
                cardCount: 52,
                shuffled: false,

            });
            console.log("deck has been added!");

        } catch (err) {
            console.error(err)
        }

        res.redirect('/decks')
    },
    selectDeck: async (req, res) => {
        const deckID = req.params.id
        console.log(`Selected Deck: ${deckID}`)

        res.render('individualDeck.ejs', { deck: deckID })
    },
    openDeck: async (req, res) => {
        console.log("Opened Deck")

        try {
            let deck = await Deck.findById({ _id: req.params.id });


        } catch (err) {
            console.error(err)
        }
    },
    drawCard: async () => {

    },
    deleteDeck: async (req, res) => {
        try {
            let deck = await Deck.findById({ _id: req.params.id });
            await Deck.remove({ _id: req.params.id });

            console.log("Deleted Deck")
            res.redirect("/decks")
        } catch (err) {
            res.redirect("/decks");
        }
    }
}
