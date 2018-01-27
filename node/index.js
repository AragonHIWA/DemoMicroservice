const express = require('express')
const http = require('http')
// Constants
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>This is Node.js app</h1>')
})

app.get('/customer', (req, res) => {
  //res.setHeader('Content-Type', 'application/json')
  res.json({"name":"John","age":30, "cars":[ "Ford", "BMW", "Fiat" ]})
})
const server = http.createServer(app)
server.listen(PORT, HOST, ()=> {
 
})
console.log(`Running on http://${HOST}:${PORT}`)