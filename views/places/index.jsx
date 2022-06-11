const React = require('react')
const Def = require('/Users/rebeccacoburn/Desktop/backEnd/rest-rant/views/default.jsx')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
          <h2>{place.name}</h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}></img>
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant and Rave About</h1>
              <div className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
  
module.exports = index