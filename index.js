console.log('Hello, Node!')
const profile = require('./src/profile.js')
console.log(profile);

const path = require('path')
console.log(path.resolve())

const momentName = require('moment')
console.log(momentName().format('MMMM Do YYYY, h:mm:ss a'))