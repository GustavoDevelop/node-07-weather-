const axios = require('axios');

const config = require('../config');
const logger = require('../loaders/logger')
class CityRepository {

    constructor(){
            this.limit = 10;
            this.language = 'es';
            this.pathBase = config.mapbox.pathBase;
            this.apiKey = config.mapbox.apikey
    }

    async findCities(city){  
       
        const url = (`${this.pathBase}${city}.json?access_token=${this.apiKey}&limit=${this.apikey}&language=${this.language}`);
        logger.silly(url);

        const response = await axios.get(url);

        logger.silly(response);
        return response.data;
    }
}

module.exports = CityRepository;