const express = require('express');
const hbs = require('hbs');
let app = express();
let errorMessage = { errorMessage: "Unable to to handle request"};



app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs', {
    pageTitle: 'Something went wrong',
    message: 'Please contact web support (ha! It\'s me!).'
  })
});

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Home Page',
    message: "Welcome to this amazing website"
  });
});


app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send(errorMessage)
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
