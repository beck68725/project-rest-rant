require('dotenv').config()
const express = require('express')
const app = express()
//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
//wildcard route with status response
app.get('*', (req, res) => {
    res.render('error404')
  })  

  //Listen for Connections
app.listen(process.env.PORT)
