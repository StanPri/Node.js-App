const commands = require('./commands');
const _ = require('lodash');
const yargs = require('yargs');
const {readWriteFile} = require('./readWriteFile');

console.log("Starting app.js");

const argv = yargs.argv;
let argument = argv._[0];


//Saving orignalCommand and reading it

let originalCommand = {
  title: 'originalCommand',
  body: 'Do this & that'
}

readWriteFile(originalCommand);

//END Saving orignalCommand and reading it



if(argument == 'add') {
  commands.addCommand(argv.title, argv.body);
} else if (argument == 'list') {
  commands.getAllCommands();
} else if (argument == 'read') {
  commands.getCommand(argv.title);
} else if (argument == 'remove') {
  commands.removeCommand(argv.title);
} else {
  console.log("Argument not recognized");
}
