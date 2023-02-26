//HTTP ( Built-in  Modules)
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  else if (req.url === '/about') {
    res.end('Welcome to our about page')
  }
  else{
  res.end(
    `
    <h1>404 NOR FOUND</h1>
    <p>SORRY  MY BROTHER YOU CANT FIND ANYTHING INSIDE</p>
    <a href="/">BACK</a>
    `
  )
  }
})

server.listen(5000)