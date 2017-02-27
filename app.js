const commands = require('./commands');
const _ = require('lodash');
const yargs = require('yargs');
const {readWriteFile} = require('./readWriteFile');

console.log("Starting app.js");

//Objects for Yargs
titleOptions = {
  describe: 'Title of a command',
  demand: true,
  alias: 't'
};

bodyOptions = {
  describe: 'Description of new command',
  demand: true,
  alias: 'b'
}

//Yargs Advanced options
const argv = yargs
  .command( 'add', 'Add a new command',
    { title: titleOptions, body: bodyOptions }
  )
  .command('list', 'List all command')
  .command('read', 'Read a particular command',
    { title: titleOptions }
  )
  .command('remove', 'Remove particular command',
    { title: titleOptions }
  )
  .help().argv;

//User Input
let argument = argv._[0];

//Command options
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
