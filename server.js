const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const connectDB = require('./config/database')
const logger = require('morgan')
const mainRoutes = require('./routes/main')
const deckRoutes = require('./routes/decks')

//.env file in config
require('dotenv').config({ path: './config/.env' })

//connect to DB
connectDB()

//rendering with EJS for views
app.set('view engine', 'ejs')



//Logging: 
app.use(logger('dev'))

//use forms for put || deletes
app.use(methodOverride('_method'))


//Routes
app.use('/', mainRoutes)
app.use('/decks', deckRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server online`)
})
