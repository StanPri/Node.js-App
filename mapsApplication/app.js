const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4081%20Tresler%20Ave%20North%20Highlands',
  json: true
}, (error, response, body) => {
  console.log(body);

});
