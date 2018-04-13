const request = require('request');
const config = require('../config');


let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  const apikey = "AIzaSyCezfD6FEafevV_SHbU8mvxT9SJQTp2Tw4";

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.google_apikey}`,
    json: true
  }, (error, reponse, body) => {
    if (error) {
      callback('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitute: body.results[0].geometry.location.lng
      })
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;