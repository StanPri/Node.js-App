const fs = require('fs');
console.log(`Starting commands`);

let addCommand = (title, body) => {
  let commands = [];

  let command = {
    title,
    body
  };

  //Read Existing
  try {
    let commandRead = fs.readFileSync('commandsFile.json');
    commands = JSON.parse(commandRead);
  } catch (e){
    console.log(e);
  }

  //Find duplicates
  var duplicateCommands = commands.filter((command) => command.title === title)
  if (duplicateCommands.length === 0)
  {
    //Save in file
    commands.push(command);
    fs.writeFileSync('commandsFile.json', JSON.stringify(commands));
  } else {
    console.log("Command has duplicates!");
  }

};
let getAllCommands = () => {
  console.log("getAll --> ");
};
let getCommand = (title) => {
  console.log("readCommand --> ", title);
};
let removeCommand = (title) => {
  console.log("removeCommand --> ", title);
};

module.exports =  {
  addCommand,
  getAllCommands,
  getCommand,
  removeCommand
};
