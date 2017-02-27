const fs = require('fs');
console.log(`Starting commands`);

let fetchCommands = (title) => {
  try {
    let commandRead = fs.readFileSync('commandsFile.json');
    if (typeof(title) != "undefined")
    {
        return JSON.parse(commandRead).filter((command) => command.title === title);
    }
    return JSON.parse(commandRead);
  } catch (e){
    console.log(e);
    return [];
  }
}

let saveCommand = (commands, command, title) => {
  //Find duplicates
  var duplicateCommands = commands.filter((command) => command.title === title);
  if (duplicateCommands.length === 0)
  {
    //Save in file
    commands.push(command);
    fs.writeFileSync('commandsFile.json', JSON.stringify(commands));
    return commands;
  } else {
    console.log("Command has duplicates!");
    return commands;
  }
}

let addCommand = (title, body) => {
  let commands = [];

  let command = {
    title,
    body
  };

  //Read Existing
  commands = fetchCommands();

  //Save Command
  return saveCommand(commands, command, title);

};
let getAllCommands = () => {
  return fetchCommands();
};
let getCommand = (title) => {
  return fetchCommands(title);
};
let removeCommand = (title) => {
  commands = fetchCommands();
  filteredCommands = commands.filter((command) => command.title !== title);
  fs.writeFileSync('commandsFile.json', JSON.stringify(filteredCommands));
  (commands.length === filteredCommands.length) ? console.log("Command not removed.") : console.log("Command removed successfully!");

  return filteredCommands;
};

module.exports =  {
  addCommand,
  getAllCommands,
  getCommand,
  removeCommand
};
