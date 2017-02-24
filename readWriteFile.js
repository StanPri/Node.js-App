const fs = require('fs');

let readWriteFile = (command) => {

  fs.writeFileSync('command.json', JSON.stringify(command));
  let commandRead = fs.readFileSync('command.json');

  console.log()
  console.log(JSON.parse(commandRead));

};

module.exports = {
  readWriteFile
};
