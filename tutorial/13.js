// npm - global command, come with node
// npm --version

// local depepndency - use it only in thid particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important into about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash');

// const items =[1, [2, [3, [4, [5]]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("Hello Alif")

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})



