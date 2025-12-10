const express = require('express')
const app = express()
const PORT = 3007

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`server in listen on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('my film library database')
})