console.log('Hello, Node!')

const profile = require('./profile.js')
console.log(profile)

const path = require('path')
console.log(path.resolve())

const moment = require('moment')
//moment().format();
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
