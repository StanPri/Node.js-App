const express = require('express');

let app = express();
let errorMessage = { errorMessage: "Unable to to handle request"};

app.get('/', (req, res) => {
  res.send({
    name: 'Stan',
    likes: [
        'Hiking',
        'Praying'
    ]
  });
});


app.get('/about', (req, res) =>{
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send(errorMessage)
});


app.listen(3000);
