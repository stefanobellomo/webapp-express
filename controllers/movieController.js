const connection = require('../database/connection')

function index(req, res) {
    const movieSql = 'SELECT id, title, director FROM movies'
    const reviewSql = 'SELECT * FROM reviews'

    connection.query(movieSql, (err, movies) => {
        if (err) return res.status(500).json({ error: true, message: 'movie not found' })

        connection.query(reviewSql, (err, reviews) => {
            if (err) return res.status(500).json({ error: true, message: 'review not found' })

            res.json({
                movies,
                reviews
            })
        })
    })
}

function show(req, res) {
    const id = req.params.id

    // scelgo di mostrare solo le info più interessanti per l'utente
    const movieSql = 'SELECT * FROM movies WHERE id = ?'
    const reviewSql = 'SELECT * FROM reviews WHERE id = ?'

    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ err: true, message: err.message })

        // mostro questo se non trovo nulla in movieResults
        if (movieResults.length === 0) return res.status(404).json({ err: true, message: 'movie not found' })

        // estraggo l'oggetto dall'array, cioè il database
        const movie = movieResults[0]

        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ err: true, message: 'review not found' })
            // aggiungo le recensioni ai film
            movie.reviews = reviewResults
            res.json(movie)
        })
    })
}

module.exports = { index, show }