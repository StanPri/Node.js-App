const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '58c85a690303f84e841bd2ea';

User.findById(id).then((user) => {
  if(!user){
    return console.log('ID is not found');
  }
  console.log('USER BY ID', user);
});
