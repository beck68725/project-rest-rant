const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/Users/rebeccacoburn/Desktop/backEnd/rest-rant/public/image/eaters-collective-ddZYOtZUnBk-unsplash.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/Users/rebeccacoburn/Desktop/backEnd/rest-rant/public/image/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg'
  }]
     
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
   res.render('places/new')
 })

module.exports = router

  