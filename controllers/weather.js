const express = require('express');
const Success = require('../handler/successHandler');
const {findCities} = require('../services/cityServices');

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
 
 module.exports = {
   cities,
 }