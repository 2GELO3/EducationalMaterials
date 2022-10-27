require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Web app available at http://127.0.0.1:${port}`)
})


