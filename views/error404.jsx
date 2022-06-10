const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img className='happyPlace' src='/Users/rebeccacoburn/Desktop/backEnd/rest-rant/public/image/happyPlace.jpg' alt='Elfin sod house'/>
                    <div>
                      Photo by Zane Lee on Unsplash
                    </div>
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
