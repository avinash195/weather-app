const request = require('request');

let getWeather = () => { 
  request({
      url: "https://api.darksky.net/forecast/d7180ce18dae9bd033c044f3226ca3f0/37.4224082,-122.0856086",
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
      } else {
        console.log('Unable to fetch weather');
      }
    }
  )
}

module.exports.getWeather = getWeather;