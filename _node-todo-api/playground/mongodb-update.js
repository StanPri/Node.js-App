const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('58c71f6f98f15438a83755b9')},
  //   {$set:{completed:true}},
  //   {returnOriginal:false}
  // ).then((err, result) => {
  //  if(err) {
  //    return console.log('Unable to update Todo', err);
  //  }
  //
  //  console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('58c837c321ff85607c4e3775')
    },
    {
      $set: {name: 'Melanda'},
      $inc: {age:1}
    }, {
      returnOriginal:false
    }).then((result) => {
      console.log(result);
  });

});
