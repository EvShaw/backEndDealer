const express = require('express')
const router = express.Router()
const decksController = require('../controllers/decks')

//Deck Routes:

router.get('/', decksController.getDecks)
router.get('/:id', decksController.selectDeck)

router.post('/createFullDeck', decksController.createFullDeck) 
router.post('/createShortDeck', decksController.createShortDeck) 
router.post('/openDeck/:id', decksController.openDeck) 

router.put('/shuffleDeck/:id', decksController.shuffleDeck)
router.put('/drawCard/:id', decksController.drawCard)

router.delete('/deleteDeck/:id', decksController.deleteDeck);

module.exports = router