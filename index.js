console.log('Hello, Node!')
const profile = require('./src/profile.js')
console.log(profile)
const path = require('path')
console.log(path.resolve())

const moment = require('moment')

console.log(moment().endOf('day').fromNow())