console.log(`Starting commands`);

let addCommand = (title, body) => {
  console.log(`AddCommand --> Title!: ${title} Body!: ${body}`);
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
