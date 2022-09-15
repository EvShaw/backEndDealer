const express = require('express')
const router = express.Router()
const decksController = require('../controllers/decks')

//Deck Routes:

router.get('/', decksController.getDecks)

router.get('/:id', decksController.selectDeck)

router.post('/createDeck', decksController.createDeck) 

router.delete('/deleteDeck/:id', decksController.deleteDeck);

// router.post('/openDeck/:id', decksController.openDeck)

module.exports = router