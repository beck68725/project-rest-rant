const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <h2>Rating</h2>
                <p>currently unrated</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
