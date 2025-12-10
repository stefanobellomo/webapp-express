const express = require('express')
const router = express.Router()
const connection = require('../database/connection')

router.get('/', (req, res) => {

    const MovieSql = 'SELECT id, title, director FROM movies'
    const reviewSql = 'SELECT * FROM reviews'

    connection.query(MovieSql, (err, movies) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        connection.query(reviewSql, (err, reviews) => {
            if (err) return res.status(500).json({ error: true, message: err.message })

            res.json({
                movies,
                reviews
            })
        })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    res.send('show me the movie with id: ' + req.params.id)
})

module.exports = router