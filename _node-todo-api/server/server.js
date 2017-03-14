let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Set up third-party library

mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

let newTodo = new Todo({
  text: "Kill the mockingbird",
  completed: false,
  completedAt: 60
});

newTodo.save().then((doc) => {
  console.log('Save todo', doc)
}, (e) => {
  console.log('Unable to save todo');
});
