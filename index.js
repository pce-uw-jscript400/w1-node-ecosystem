// console.log('Hello, Node!');

const profile = require('./src/profile.js')
console.log("profile.name: ", profile.name)
console.log("profile.age: ", profile.age)

// const path = require('path')
// console.log( path, path.resolve())
// console.log(path.basename())

const moment = require('moment')
moment().format();
