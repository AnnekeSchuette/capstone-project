const express = require('express')
const setupMongo = require('./setupMongo')
const { createProxyMiddleware } = require('http-proxy-middleware')

const options = {
  target: 'https://anneke-capstone-project.herokuapp.com/', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/app/client/src': '/src', // remove base path
  },
  router: {
    'dev.localhost:4000': 'http://localhost:8000',
  },
}
const appProxy = createProxyMiddleware(options)

setupMongo()
const app = express()

app.use(express.json()) // add middleware for json data
app.use('/api', appProxy)
app.use('/api/categories', require('./routes/categories'))
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log('Server started at http://localhost:4000')
})
