const moment = require("moment");

const path = require('path')
  console.log(path.resolve())

const profile = require('./src/profile')
  console.log(profile)

  //moment
  let theTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(theTime);

