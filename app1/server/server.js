const express = require('express')
const bodyParser  = require('body-parser') 
const cors  = require('cors') 
const session  = require('express-session') 

const homeRouter = require('./routes/Home')

const app = express() 

const PORT = 3001 


app.use('/', homeRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})