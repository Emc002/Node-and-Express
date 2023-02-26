// CommonJS, every file is module(by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-name');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data.item[1])
require('./7-mind-bazooka')
sayHello(names.One)
sayHello(names.Two)
sayHello(names.THree)
