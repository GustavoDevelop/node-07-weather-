const express = require('express');
const axios = require('axios');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */


const test = async (req, res) => {

    const response = await axios.get('https://reqres.in/api/users?page=2')
       
     res.json(response.data);
 };
 
 module.exports = {
   test,
 }