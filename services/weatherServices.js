const WeatherRepository = require('../repositories/weatherRepository');
const weatherRepository = new WeatherRepository();
const CityRepository = require('../repositories/cityRepository');
const cityRepository = new CityRepository();
const logger = require('../loaders/logger');

const weatherByCoordinates = async(lon, lat) => {

   const weather = await weatherRepository.repository.weatherByCoordinates(lon, lat);

   
       return{
           name: weather.name,
           description: weather.weather[0].description,
            temperature: weather.main.temp,
            temperatureMin: weather.main.temp_main,
            temperatureMax: weather.main.temp_max
   };
 }

 const weatherByCityId = async(city, id) => {
    const cities = cityRepository.findCities(city);

    const cityData = cities.features.filter(e => e.id === id);
    const lon = cityData.geometry.coordinates[0];
    const lat = cityData.geometry.coordinates[1]
    return weatherByCoordinates(lon, lat);
 }

module.exports = {
    weatherByCoordinates,
    weatherByCityId
}