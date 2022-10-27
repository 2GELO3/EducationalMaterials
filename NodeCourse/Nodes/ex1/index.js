const http = require('http')
const port = 8000

const server = http.createServer((req, res) => {
  res.end("Hi guys")
})

server.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port)
})

