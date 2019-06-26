console.log('Hello, Node!')

const profile = require('./src/profile.js')
console.log(profile)

console.log(profile.age)

const path = require('path')
console.log(path, path.resolve())

const moment = require('moment')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))