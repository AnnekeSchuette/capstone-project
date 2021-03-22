const express = require('express')
const setupMongo = require('./setupMongo')
require('dotenv').config()
const { PORT = 4000 } = process.env

setupMongo()
const app = express()

app.use('/', express.json()) // add middleware for json data
app.use(express.static('./client/build'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/stored-wines', require('./routes/storedWines'))
app.use(require('./routes/error'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
