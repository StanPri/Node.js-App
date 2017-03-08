
const request = require('request');

var getWeather = (latitude, longitude, callback) => {

  request({
    url: `https://api.darksky.net/forecast/3799a0a6106db6217feaa7aeef7f5f4d/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
      if(!error && response.statusCode === 200)
      {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Weather server does not respond.");
      }

    }
  );
};


module.exports.getWeather = getWeather;
