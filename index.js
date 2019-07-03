console.log('Hello, Node!')
const profile = require('./node_modules/moment/src/profile')
console.log(profile)

const path = require('path')
console.log(path.resolve())

const moment = require('./node_modules/moment/moment.js')
/*this also works 
const moment = require('moment')
node knows where to look
*/

const timenow = moment().format('LTS')
console.log(timenow)