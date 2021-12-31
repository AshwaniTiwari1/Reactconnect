require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postblogRoutes = require('./controllers/postblogController')


var app = express()
app.use(bodyParser.json())
// app.use(cors({origin:'http://localhost:3000'}))
app.use(cors())
app.listen(4000,()=>console.log('Server started at : 4000'))


app.use('/blog',postblogRoutes)