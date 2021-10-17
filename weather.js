const { default: axios } = require('axios');

getWeather = async (request, response) => {
  let lon = request.query.lon;
  let lat = request.query.lat;
  let searchQuery = request.query.searchQuery;
  // console.log(request.query);

  try {
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`;
    console.log(weatherUrl)
    const weatherInfo = await axios.get(weatherUrl);
    console.log(weatherInfo.data)
    let weatherData = weatherInfo.data.data.map(day => new Forecast(day));
    response.status(200).send(weatherData);
  } catch (error) {
    response.status(500).send('And I oop! City not found')
  }
};

function Forecast(day) {    //<----similar to class like in the front end
  this.date = day.valid_date,
    this.description = day.weather.description
}

module.exports = getWeather;