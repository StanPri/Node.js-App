const commands = require('./commands');
const _ = require('lodash');
const yargs = require('yargs');

console.log("Starting app.js");

const argv = yargs.argv;
let argument = argv._[0];

if(argument == 'add') {
  commands.addCommand(argv.title, argv.body);
} else if (argument == 'list') {
  commands.getAll();
} else if (argument == 'read') {
  commands.getCommand(argv.title);
} else if (argument == 'remove') {
  commands.removeCommand(argv.title);
} else {
  console.log("Argument not recognized");
}
