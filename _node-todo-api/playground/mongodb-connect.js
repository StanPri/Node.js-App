const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').insertOne({
    name: 'Victor',
    age: 25
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
