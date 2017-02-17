const fs = require('fs');
const os = require('os');
const math = require('./math');
const _ = require('lodash');

let user = os.userInfo();
let addition = math.add;

console.log(`4 + (-1) = ${addition(4,-1)}`)



// fs.appendFile('file.txt', `Hello, ${user.username}. `, function(error)
//   {
//     if(error) {
//       console.log('Unable to write the file');
//     }
//   }
// );
