const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/fireworks.jpg' alt='Fireworks' />
                    <div>
                        Photo by Aaron Huber on Unsplash
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home