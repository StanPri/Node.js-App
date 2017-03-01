const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather/weather');
const axios = require('axios');

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

  let encodedAddress = encodeURIComponent(argv.address);
  let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(geocodeUrl).then((response) => {
    let latitude = response.data.results[0].geometry.location.lat;
    let longitude = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/3799a0a6106db6217feaa7aeef7f5f4d/${latitude},${longitude}`;
    return axios.get(weatherURL);
  }).then((response) => {
    console.log(`Currently the weather is ${response.data.currently.temperature} F. It really feels like ${response.data.currently.apparentTemperature} F.`);
  }).catch((e) => {
    if(e.response === undefined)
      console.log("Server does not respond.");
  })
