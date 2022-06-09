require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//import router from places.js
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
//wildcard route with status response
app.get('*', (req, res) => {
    res.render('error404')
  })  

app.listen(process.env.PORT)
