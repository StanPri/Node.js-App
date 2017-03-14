const MongoClient = require('mongodb').MongoClient;

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
  db.collection('Users').findOneAndDelete({name: "Maxim"}).then(
    (result) => {
      console.log(result);
    }
  );

  db.close();
});
