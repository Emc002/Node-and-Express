const http  = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImages = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((request,response) => {
  console.log(request.method)
  console.log(request.url)
  const url = request.url;
  if( url === '/')
  {
    response.writeHead(200,{'content-type' : 'text/html'})
    response.write(homePage)
    response.end()
  }
  else if( url === '/about')
  {
    response.writeHead(200,{'content-type' : 'text/html'})
    response.write(`<h1>About Page </h1>`)
    response.end()
  }
  else if( url === '/styles.css')
  {
    response.writeHead(200,{'content-type' : 'text/css'})
    response.write(homeStyles)
    response.end()
  }
  else if( url === '/logo.svg')
  {
    response.writeHead(200,{'content-type' : 'image/svg+xml'})
    response.write(homeImages)
    response.end()
  }
  else if( url === '/browser-app.js')
  {
    response.writeHead(200,{'content-type' : 'text/javascript'})
    response.write(homeLogic)
    response.end()
  }
  else{
    response.writeHead(404,{'content-type' : 'text/html'})
    response.write(`<h1>Not Found </h1>`)
    response.end()
  }
})

server.listen(5000)