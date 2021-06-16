const express = require('express');
const {findCities} = require('../services/cityServices');

const CityRepository = require('../repositories/cityRepository');
const repository = new CityRepository();


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


const cities = async (req, res) => {

    
       
     res.json(await findCities(req.params.city));
 }; 
 
 module.exports = {
   cities,
 }