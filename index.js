console.log('Hello World');

const profile = require('./src/profile.js')
console.log(profile)

const path = require('path')
console.log(path.resolve())

const moment = require('moment')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log( moment().calendar());