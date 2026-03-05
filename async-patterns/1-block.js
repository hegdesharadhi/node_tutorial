const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the homepage!')
  }
  if (req.url === '/about') {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('Here is our short history')
  }
  res.end(`Sorry, we can't seem to find the page you are looking for`)
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})
