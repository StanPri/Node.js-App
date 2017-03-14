const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //DeleteMany
  // db.collection('Users').deleteMany({name: "Maxim"}).then(
  //   (result) => {
  //     console.log(result);
  //   }
  // );

  //DeleteOne
  // db.collection('Users').deleteOne({name: "Yuri"}).then(
  //   (result) => {
  //     console.log(result);
  //   }
  // );

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58c721b2c641ab09f4a95549')}).then(
    (result) => {
      console.log(result);
    }
  );

  db.close();
});
