const express = require('express')
const app = express()
const PORT = 3007
const moviesRouter = require('./routes/movies')

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`server in listen on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('my film library database')
})

app.use('/api/movies', moviesRouter)