const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').insertOne({
    name: 'Maxim',
    age: 25,
    location: 'California, US'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Users', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
