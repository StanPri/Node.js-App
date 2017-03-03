const express = require('express');
const hbs = require('hbs');
let app = express();
let errorMessage = { errorMessage: "Unable to to handle request"};

app.set('view engine', 'hbs');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    message: "Welcome to this amazing website"
  });
});


app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send(errorMessage)
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
