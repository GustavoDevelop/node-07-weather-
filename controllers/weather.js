const express = require('express');
const axios = require('axios');

const config = require('../config');
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


const cities = async (req, res) => {

    const city = req.params.city;
    const response = await 
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${config.mapbox.apikey}&limit=10&language=es`);
       
     res.json(response.data);
 }; 
 
 module.exports = {
   cities,
 }