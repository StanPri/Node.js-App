const fs = require('fs');
const os = require('os');
const math = require('./math');
const _ = require('lodash');

let user = os.userInfo();
let addition = math.add;

console.log("Starting app.js");

let command =  process.argv[2];

if (command === 'read') {
  console.log('Command: read');
}
