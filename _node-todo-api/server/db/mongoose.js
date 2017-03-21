let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Set up third-party library
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
