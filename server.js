const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const methodOverride = require('method-override')
// const connectDB = require('./config/database')
const logger = require('morgan')

//routes:

//.env file in config
require('dotenv').config({ path: './config/.env' })

//connect to DB
// connectDB()

//ejs for simple display
//not implemented

//static folder 
//not implemented

//Logging: 
app.use(logger('dev'))

//use forms for put || deletes
// app.use(methodOVerride('_method'))


app.listen(process.env.PORT, () => {
    console.log(`Server online`)
})