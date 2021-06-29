const WeatherRepository = require('../repositories/weatherRepository');
const repository = new WeatherRepository();
const logger = require('../loaders/logger');

const weatherByCoordinates = async(lon, lat) => {

   const weather = await repository.weatherByCoordinates(lon, lat);

   logger.silly(JSON.stringify(weather));

   
       return{
           name: weather.name,
           description: weather.weather[0].description,
            temperature: weather.main.temp,
            temperatureMin: weather.main.temp_main,
            temperatureMax: weather.main.temp_max
   };
 }

module.exports = {
    weatherByCoordinates
}