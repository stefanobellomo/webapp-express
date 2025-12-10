const express = require('express')
const app = express()
const PORT = 3007
const connection = require('./database/connection')

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`server in listen on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('my film library database')
})

app.get('/api/movies', (req, res) => {
    const sql = 'SELECT id, title, director FROM movies'
    connection.query(sql, (err, response) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(response)
    })
})