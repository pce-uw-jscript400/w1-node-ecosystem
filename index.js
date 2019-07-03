
const profile = require('./src/profile.js');

console.log(profile.name + " " + profile.age);

console.log("hello node");

const path = require('path');
const moment=require('moment');

console.log(path.resolve());
console.log(moment().format('DD MMM YYYY'));