let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Set up third-party library

mongoose.connect('mongodb://localhost:27017/TodoApp');

// let Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     defualt: null
//   }
// });
//
// let newTodo = new Todo({
//   text: "  Cook   ",
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

let newUser = new User({
  email: "example@mail.com"
});

newUser.save().then((doc) => {
  console.log('Save todo', doc);
}, (e) => {
  console.log('Can\'t save it', e);
});
