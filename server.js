const express = require('express')
const app = express()
const PORT = 3007
const moviesRouter = require('./routes/movies')
const notFound = require('./middleware/notFound')
const serverError = require('./middleware/serverError')
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`server in listen on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('my film library database')
})

app.use('/api/movies', moviesRouter)
app.use(notFound)
app.use(serverError)