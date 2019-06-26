console.log('Hello, Node!')

const profile = require('./src/profile.js')
console.log(profile)

const path = require('path')
console.log(path.resolve())
console.log(path.basename(path.resolve()))

const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));