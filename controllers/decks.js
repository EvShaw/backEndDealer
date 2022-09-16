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
        const suits = ['H', 'C', 'D', 'S']
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
        const cardDeck = []

        for (let suitCount = 0; suitCount < suits.length; suitCount++) {
            for (let rankCount = 0; rankCount < ranks.length; rankCount++) {
                cardDeck.push(ranks[rankCount] + suits[suitCount])
            }
        }

        try {
            await Deck.create({
                Type: 'full',
                cardCount: 52,
                shuffled: false,
                openDeck: false,
                deckOfCards: cardDeck
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
        const deckID = req.params.id
        console.log(`Opened Deck: ${deckID}`)

        try {
            await Deck.findOneAndUpdate({ _id: req.params.id },
                {
                    openDeck: true,
                })
            // await Deck.find({ openDeck: true })


            // res.redirect(`/decks/${deckID}`)
            res.render('individualDeck.ejs', {})
        } catch (err) {
            console.error(err)
        }
    },
    drawCard: async () => {

    },
    shuffleDeck: async () => {
        //deck.sort(() => (Math.random() > .5) ? 1 : -1);
    },
    deleteDeck: async (req, res) => {
        try {
            // let deck = await Deck.findById({ _id: req.params.id });
            await Deck.remove({ _id: req.params.id });

            console.log("Deleted Deck")
            res.redirect("/decks")
        } catch (err) {
            res.redirect("/decks");
        }
    }
}
