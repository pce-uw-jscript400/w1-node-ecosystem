// console.log('Hello, Node!')
//
const profile = require('./src/profile.js')
console.log(profile.name + " - " + profile.birthdate)
//
//
// const path = require('path')
// console.log(path)
// console.log(path.resolve())

//path.resolve() returns a string
//path is an object that has many functions

const moment = require('moment')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
