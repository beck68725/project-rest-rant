const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]  
     
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
   res.render('new')
 })

 router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


 router.get('/:id', (req, res) => {
  res.render(':id')
})

module.exports = router

