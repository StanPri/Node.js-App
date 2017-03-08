const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  }).help()
  .alias('help', 'h')
  .argv;

  let address = argv.address;

  geocode.geocodeAddress(address, (errorMessage, results) => {
    if(errorMessage) {
      console.log(errorMessage);
    }  else {
      //Calling weather api
      weather.getWeather(results.latitude, results.longitude, (errorMessage, output) => {
        if(errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`Currently the weather is ${output.temperature} F. It really feels like ${output.apparentTemperature} F.`);
        }
      });
    }
  });
