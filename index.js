const express = require('express')
const path = require('path')

const app = express()
const port = 5000

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/home', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})
