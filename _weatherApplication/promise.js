const request = require('request');
const weather = require('./weather/weather.js');

var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if( error ) {
        reject('Unable to connect to the Google geocode servers.');
      } else if(body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if(body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });

      }

    });
  })
};

geocodeAddress('4081 Tresler Ave, North Highlands CA').then((location) => {
  weather.getWeather(location.latitude, location.longitude, (errorMessage, output) => {
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(`Currently the weather is ${output.temperature} F. It really feels like ${output.apparentTemperature} F.`);
    }
  });
}, (errorMessage) => {
    console.log(errorMessage);
});
