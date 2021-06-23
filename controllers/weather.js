const express = require('express');
const Success = require('../handler/successHandler');
const {findCities} = require('../services/cityServices');
const {weatherByCoordinates: weatherByCoordinatesService} = require('../services/weatherServices');
const CityRepository = require('../repositories/cityRepository');
const repository = new CityRepository();


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


const cities = async (req, res) => {
  const cities = await findCities(req.params.city);
  const success = new Success(cities);
  res.json(success);
 }; 
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

 
 module.exports = {
   cities,
   weatherByCoordinates
 }