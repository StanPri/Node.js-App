const commands = require('./commands');
const _ = require('lodash');
const yargs = require('yargs');
const {readWriteFile} = require('./readWriteFile');

console.log("Starting app.js");

const argv = yargs.argv;
let argument = argv._[0];


if(argument == 'add') {
  let result = commands.addCommand(argv.title, argv.body);
  console.log(`(Add command): ${JSON.stringify(result)}`);
} else if (argument == 'list') {
  let result = commands.getAllCommands();
  console.log(`(List command): ${JSON.stringify(result)}`);
} else if (argument == 'read') {
  let result = commands.getCommand(argv.title);
  console.log(`(Read command): ${JSON.stringify(result)}`);
} else if (argument == 'remove') {
  let result = commands.removeCommand(argv.title);
  console.log(`(Remove command): ${JSON.stringify(result)}`);
} else {
  console.log("Argument not recognized");
}
