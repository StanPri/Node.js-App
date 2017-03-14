let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Set up third-party library
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
