const profile = require('./src/profile.js')
const path = require('path')
const moment = require('moment')
console.log(path.resolve())
console.log('Hello, Node!')
console.log(profile.name)
console.log(profile.birthday)
console.log(moment().calendar())