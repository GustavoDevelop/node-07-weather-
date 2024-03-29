const express = require('express');
const Success = require('../handler/successHandler');

const {weatherByCoordinates: weatherByCoordinatesService} = require('../services/weatherServices');
const CityRepository = require('../repositories/cityRepository');
const repository = new CityRepository();



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


 const weatherByCoordinates = async (req, res) => {

  const {lon, lat} = req.query;

  const weather = await weatherByCoordinatesService(lon, lat);
  const success = new Success(weather);
  res.json(success);
 }; 




 /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


  const weatherByCityId = async (req, res) => {

    const {city, id} = req.params;
  
    const weather = await weatherByCityId(city, id);
    const success = new Success(weather);
    res.json(success);
   };

 
 module.exports = {
   weatherByCoordinates,
   weatherByCityId
 }