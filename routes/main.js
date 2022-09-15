const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

//Main routes 
router.get('/', mainController.getDecks)


module.exports = router