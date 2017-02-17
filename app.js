const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFile('file.txt', `Hello, ${user.username}. `, function(error)
  {
    if(error) {
      console.log('Unable to write the file');
    }
  }
);
