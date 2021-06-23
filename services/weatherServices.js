const WeatherRepository = require('../repositories/weatherRepository');
const repository = new WeatherRepository();
const logger = require('../loaders/logger');

const weatherByCoordinates = async(lon, lat) => {

   const weather = await repository.weatherByCoordinates(lon, lat);

   logger.silly(JSON.stringify(weather));

   /*return cities.features.map(e => {
       return{
           id: e.id,
           name: e.place_name,
           log: e.geometry.coordinates[0],
           lat: e.geometry.coordinates[1],
       }
   });*/

}
module.exports = {
    weatherByCoordinates
}